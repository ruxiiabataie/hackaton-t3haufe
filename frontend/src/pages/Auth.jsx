import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = isSignup
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({
            email,
            password,
          });

      if (response.error) {
        alert(response.error.message);
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("AUTH ERROR:", error);
      alert("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={topBar}>
        <span style={back} onClick={() => navigate("/")}>
          ← Back
        </span>
      </div>

      <div style={form}>
        <h2 style={title}>ITECify</h2>

        <p style={subtitle}>
          {isSignup
            ? "Create your workspace account"
            : "Sign in to your workspace"}
        </p>

        <input
          type="email"
          placeholder="Email"
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={btn} onClick={handleAuth}>
          {loading
            ? "Loading..."
            : isSignup
            ? "Create Account →"
            : "Sign In →"}
        </button>

        <p style={switchText}>
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <span
            style={switchLink}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? " Sign In" : " Create one"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;