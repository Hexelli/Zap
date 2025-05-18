import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Zap } from "lucide-react";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <header className="flex items-center gap-3 text-3xl font-bold">
        <Zap className="text-yellow-400 animate-pulse" size={32} />
        Zap
        <nav className="ml-auto space-x-4 text-lg">
          <Link to="/" className="text-yellow-300 hover:underline">Home</Link>
          <Link to="/auth" className="text-yellow-300 hover:underline">Sign In / Up</Link>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
