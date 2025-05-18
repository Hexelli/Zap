import React, { useState } from "react";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import "./AuthForm.css";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMode = () => setAuthMode(authMode === "signin" ? "signup" : "signin");

  const handleAuth = async () => {
    setLoading(true);
    setError("");
    const { error } =
      authMode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <motion.div
          key={authMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="auth-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="auth-error">{error}</p>}
          <button
            onClick={handleAuth}
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Loading..." : authMode === "signin" ? "Sign In" : "Sign Up"}
          </button>
          <button
            className="auth-toggle"
            onClick={toggleMode}
          >
            {authMode === "signin"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;
