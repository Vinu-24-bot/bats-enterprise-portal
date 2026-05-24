import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";

export default function ProductsPortal() {
  const navigate = useNavigate();

  const handleSelect = (product: string) => {
    // 🚀 BYPASS AUTH: Instantly set session and jump straight to the dashboard
    sessionStorage.setItem("master_auth", "true");
    sessionStorage.setItem("active_product", product);
    navigate("/dashboard");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } }
  };

  const iconVariants: Variants = {
    hover: { y: -5, scale: 1.1, transition: { type: "spring" as const, stiffness: 300 } }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="bg-watermark" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-black font-display tracking-tight mb-6 text-foreground drop-shadow-lg">
          BATS.ai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Engine</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium">
          Enterprise AI solutions for modern hiring. Select a module to access your secure command center.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-10" 
      >
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="glass-panel p-8 rounded-3xl cursor-pointer group border-combo/30 hover:border-combo/70 hover:shadow-[0_0_50px_rgba(250,204,21,0.25)] transition-all duration-300 flex flex-col h-full bg-gradient-to-b from-card/90 to-card/50 relative overflow-hidden transform"
          onClick={() => handleSelect('combo')}
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-combo to-transparent opacity-70" />
          
          <motion.div variants={iconVariants} className="w-16 h-16 rounded-2xl bg-combo/15 flex items-center justify-center mb-6 group-hover:bg-combo/25 transition-colors border border-combo/20">
            <Layers className="w-8 h-8 text-combo" />
          </motion.div>
          
          <h2 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-combo transition-colors">BATS Enterprise Suite</h2>
          <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
            The Ultimate Combo. Unrestricted access to both the Resume ATS Engine and the Video AI Interview platform.
          </p>
          <div className="flex items-center text-combo font-bold text-sm tracking-wide uppercase">
            Access Suite <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}