import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={container}>

      {/* LEFT */}
      <div style={left}>

        <span style={appName}>ITECify</span>

        <h1 style={title}>
          Code together.<br />
          In real time.
        </h1>

        <p style={subtitle}>
          A collaborative coding environment where every change is instantly synced.
        </p>

        <button style={btn} onClick={() => navigate("/auth")}>
          Enter Workspace →
        </button>

      </div>

      {/* RIGHT */}
      <div style={right}>
        <div style={overlay}></div>
        <div style={bigT3}>T3</div>
      </div>

    </div>
  );
}

export default Landing;



// ================= STYLES =================

const container = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#0a0a0a",
  color: "white",
  fontFamily: "'IBM Plex Mono', monospace"
};

const left = {
  width: "50%",
  padding: "100px 80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"
};

const appName = {
  fontSize: "13px",
  letterSpacing: "2px",
  color: "#888",
  marginBottom: "30px"
};

const title = {
  fontSize: "56px",
  lineHeight: "1.2",
  marginBottom: "24px",
  fontWeight: "600"
};

const subtitle = {
  color: "#777",
  marginBottom: "40px",
  maxWidth: "380px",
  fontSize: "14px",
  lineHeight: "1.6"
};

const btn = {
  padding: "14px 26px",
  border: "1px solid #333",
  background: "transparent",
  color: "white",
  cursor: "pointer",
  letterSpacing: "1px"
};

const right = {
  width: "50%",
  position: "relative",
  backgroundImage: "url('/bits.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  filter: "grayscale(100%) brightness(0.25)"
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(to left, rgba(0,0,0,0.85), rgba(0,0,0,0.3))"
};

const bigT3 = {
  position: "absolute",
  top: "50%",
  left: "-20px",
  transform: "translateY(-50%)",
  fontSize: "420px",
  fontWeight: "800",
  fontFamily: "'Orbitron', sans-serif",
  color: "#2a2a2a",
  letterSpacing: "-5px",
  pointerEvents: "none",
  zIndex: 2
};