import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Video, LogOut, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function CommandDashboard() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const isAuth = sessionStorage.getItem("master_auth") === "true";
    if (!isAuth) {
      navigate("/"); // 🚀 CHANGED: Redirects to the main portal instead of the old Auth page
      return;
    }
    setProduct(sessionStorage.getItem("active_product") || "combo");
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/"); // 🚀 CHANGED: Redirects to main portal
  };

  // 🌍 YOUR ACTUAL VERCEL DEPLOYMENT LINKS
  const GENIUS_HUB_URL = "https://bats-original.vercel.app"; 
  const FORGE_PRO_URL = "https://nexus-ai-platform-omega.vercel.app"; 

  return (
    <div className="min-h-screen relative p-6 md:p-12">
      <div className="bg-watermark" />
      
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 relative z-10 glass-panel px-6 py-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">BATS Enterprise</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Command Center</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center text-sm font-semibold text-destructive hover:bg-destructive/10 px-4 py-2 rounded-lg transition-colors border border-destructive/20"
        >
          <LogOut className="w-4 h-4 mr-2" /> Return to Portal
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl font-bold font-display mb-8">Active Modules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {(product === "geniushub" || product === "combo") && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase rounded-full border border-primary/30">Active</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Genius Hub ATS</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Launch the Applicant Tracking System. Resume processing, JD matching, and bulk evaluation pipeline.
                </p>
              </div>
              
              <a 
                href={GENIUS_HUB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center hover:bg-primary/90 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
              >
                Launch Module <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          )}

          {(product === "forgepro" || product === "combo") && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Video className="w-6 h-6 text-accent" />
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase rounded-full border border-accent/30">Active</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Forge Pro AI</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Launch the Live Video Interview environment. Generate automated tech screenings and telemetry data.
                </p>
              </div>
              
              <a 
                href={FORGE_PRO_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg bg-accent text-accent-foreground font-bold flex items-center justify-center hover:bg-accent/90 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
              >
                Launch Module <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          )}

        </div>
      </motion.div>
    </div>
  );
}