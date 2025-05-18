import React from "react";
import { motion } from "framer-motion";

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
    <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="bg-gray-800 border border-yellow-500/20 shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">{feat.title}</h3>
            <p className="text-sm text-gray-300">{feat.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default MainFeatures;
