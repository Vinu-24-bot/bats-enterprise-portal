import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, KeyRound, AlertCircle, FileText, ArrowRight, ArrowLeft } from "lucide-react";

export default function AuthPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 🔐 YOUR GENIUS HUB CREDENTIALS
    if (username === "admin" && password === "ats2026") {
      sessionStorage.setItem("geniushub_auth", "true");
      navigate("/"); 
    } else {
      setError("Invalid credentials. Access denied.");
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-background overflow-hidden">
      {/* Spinning Company Logo */}
      <div className="bg-watermark" />

      {/* Ambient Cyan Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* 🚀 NEW: GO BACK TO MASTER PORTAL BUTTON */}
        <button 
          onClick={() => window.location.href = "https://bats-enterprise-portal.vercel.app"}
          className="flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-5 ml-2 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Return to BATS.ai Engine
        </button>

        <div className="bg-card/80 backdrop-blur-2xl p-8 rounded-3xl border-t-4 border-t-primary border-l border-r border-b border-border/50 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground tracking-tight">
              Genius <span className="text-primary">Hub</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">Enterprise ATS Secure Gateway</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center text-destructive text-sm font-medium">
                <AlertCircle className="w-4 h-4 mr-2 shrink-0" /> {error}
              </motion.div>
            )}

            <div className="space-y-2">
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="System ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative group">
                <KeyRound className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="password" 
                  placeholder="Passcode"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-background/50 border border-border/50 rounded-xl py-3 pl-12 pr-4 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 mt-4 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all flex items-center justify-center group"
            >
              Authenticate <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Company Website Hyperlink */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a 
              href="https://bayareatechsol.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
            >
              Bay Area Tech Solutions
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}