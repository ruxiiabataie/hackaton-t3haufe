function OutputPanel({ output }) {
  return (
    <div style={panel}>
      <p style={title}>Live Output</p>

      <pre style={text}>
        {output || "Output will appear here..."}
      </pre>

      <div style={aiBlock}>
        <p>AI Suggestion</p>

        <pre>
{`function solve() {
  return "AI block ready";
}`}
        </pre>

        <div style={btns}>
          <button style={btn}>Accept</button>
          <button style={btn}>Reject</button>
        </div>
      </div>
    </div>
  );
}

export default OutputPanel;

const panel = {
  width: "30%",
  padding: "20px",
  backgroundColor: "#050505",
  color: "#00ff88",
};

const title = {
  marginBottom: "10px",
};

const text = {
  fontFamily: "monospace",
};

const aiBlock = {
  marginTop: "30px",
  padding: "15px",
  border: "1px solid #00ff88",
  borderRadius: "8px",
};

const btns = {
  display: "flex",
  gap: "10px",
  marginTop: "10px",
};

const btn = {
  background: "transparent",
  border: "1px solid #333",
  color: "white",
  padding: "6px 12px",
  cursor: "pointer",
};