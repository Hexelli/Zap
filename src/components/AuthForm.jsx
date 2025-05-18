import React, { useState } from "react";
import { supabase } from "../supabase";
import { motion } from "framer-motion";

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
    <div className="mt-16 max-w-md mx-auto">
      <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl shadow-xl p-6">
        <motion.div
          key={authMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-gray-700 border border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
          <button
            onClick={handleAuth}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Loading..." : authMode === "signin" ? "Sign In" : "Sign Up"}
          </button>
          <button
            className="mt-4 text-sm text-yellow-300 underline"
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