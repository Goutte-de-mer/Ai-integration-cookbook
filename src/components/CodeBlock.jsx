"use client";

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ python, nodejs, curl }) {
  const snippets = {
    "Python": python,
    "Node.js": nodejs,
    "cURL": curl
  };
  
  const [activeTab, setActiveTab] = useState("Python");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-800 bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-4">
        <div className="flex gap-4">
          {Object.keys(snippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === lang ? "border-b-2 border-blue-500 text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <button onClick={handleCopy} className="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
          {copied ? "Copié !" : "Copier"}
        </button>
      </div>
      <div className="p-4 overflow-x-auto bg-[#0d1117]">
        <pre className="text-sm font-mono text-gray-300">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}