import React from "react";
import { motion } from "framer-motion";
import "./MainFeatures.css";

const features = [
  {
    title: "Connect Anything",
    desc: "Supports 7,000+ apps and lets you link them effortlessly with triggers and actions.",
  },
  {
    title: "Custom Code Blocks",
    desc: "Run Python, JS, or Bash inline in any automation. Fully sandboxed.",
  },
  {
    title: "Build Custom Integrations",
    desc: "Use ZapForge to build and publish your own app actions from OpenAPI schemas.",
  },
  {
    title: "AI-Powered Logic",
    desc: "Generate workflows using ZapGPT, classify data, or summarize content with AI steps.",
  },
  {
    title: "Flowchart Builder",
    desc: "Create and visualize automations with a beautiful drag-and-drop interface.",
  },
  {
    title: "Self-Hosted Runners",
    desc: "Run workflows privately or on the edge with Zap Docker or Cloudflare Workers.",
  },
];

const MainFeatures = () => {
  return (
    <section className="features-grid">
      {features.map((feat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="feature-card">
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default MainFeatures;