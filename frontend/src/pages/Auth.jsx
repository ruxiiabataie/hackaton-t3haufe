import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  return (
    <div style={container}>

      {/* BACK BUTTON */}
      <div style={topBar}>
        <span style={back} onClick={() => navigate("/")}>
          ← Back
        </span>
      </div>

      {/* FORM */}
      <div style={form}>

        <h2 style={title}>ITECify</h2>

        <p style={subtitle}>
          Sign in to your workspace
        </p>

        <input
          type="text"
          placeholder="Email"
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
        />

        <button style={btn} onClick={() => navigate("/editor")}>
          Sign In →
        </button>

      </div>

    </div>
  );
}

export default Auth;

const container = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#0a0a0a",
  color: "white",
  fontFamily: "'IBM Plex Mono', monospace",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
};

const topBar = {
  position: "absolute",
  top: "30px",
  left: "40px"
};

const back = {
  color: "#777",
  cursor: "pointer",
  fontSize: "14px"
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "320px"
};

const title = {
  fontSize: "24px",
  marginBottom: "10px"
};

const subtitle = {
  color: "#777",
  marginBottom: "20px",
  fontSize: "14px"
};

const input = {
  padding: "12px",
  background: "transparent",
  border: "1px solid #333",
  color: "white",
  outline: "none"
};

const btn = {
  marginTop: "10px",
  padding: "14px",
  border: "1px solid #333",
  background: "transparent",
  color: "white",
  cursor: "pointer",
  letterSpacing: "1px"
};