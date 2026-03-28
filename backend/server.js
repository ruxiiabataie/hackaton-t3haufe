require("dotenv").config();

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// room state
let rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // JOIN ROOM
  socket.on("join_room", ({ roomId, username }) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = {
        code: "// start coding...",
        users: [],
      };
    }

    const exists = rooms[roomId].users.find(
      (u) => u.id === socket.id
    );

    if (!exists) {
      rooms[roomId].users.push({
        id: socket.id,
        username,
      });
    }

    socket.emit("receive_code", rooms[roomId].code);

    io.to(roomId).emit("users_update", rooms[roomId].users);
  });

  // LIVE CODE SYNC
  socket.on("send_code", ({ roomId, code }) => {
    if (rooms[roomId]) {
      rooms[roomId].code = code;

      socket.to(roomId).emit("receive_code", code);
    }
  });

  // MULTI CURSOR
  socket.on("cursor_move", ({ roomId, username, position }) => {
    socket.to(roomId).emit("receive_cursor", {
      username,
      position,
    });
  });

  // RUN CODE
  socket.on("run_code", ({ roomId, code }) => {
    const output = `> Running code...

${code}

> Execution complete 🚀`;

    io.to(roomId).emit("code_output", output);
  });

  // AI REAL REQUEST
  socket.on("ai_request", async ({ roomId, code }) => {
  console.log("AI REQUEST RECEIVED:", code);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
  "You are an AI pair-programming assistant inside a collaborative IDE. Return ONLY a short improved code block that can be inserted as a suggestion block. No markdown, no triple backticks, no explanations, no comments about the code. Only raw code.",
        },
        {
          role: "user",
          content: code,
        },
      ],
    });

    const suggestion =
      completion.choices[0].message.content;

    console.log("AI RESPONSE:", suggestion);

    io.to(roomId).emit("ai_suggestion", suggestion);
  } catch (error) {
    console.error("AI ERROR:", error);
  }
});

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    for (let roomId in rooms) {
      rooms[roomId].users =
        rooms[roomId].users.filter(
          (u) => u.id !== socket.id
        );

      io.to(roomId).emit(
        "users_update",
        rooms[roomId].users
      );
    }
  });
});

server.listen(5000, () => {
  console.log(
    "🔥 WebSocket + AI server running on port 5000"
  );
});