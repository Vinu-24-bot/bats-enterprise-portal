import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FileText, Video, ArrowRight, Layers } from "lucide-react";

export default function ProductsPortal() {
  const navigate = useNavigate();

  const handleSelect = (product: string) => {
    navigate(`/auth?product=${product}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const iconVariants = {
    hover: { y: -5, scale: 1.1, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Spinning Background Logo */}
      <div className="bg-watermark" />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-black font-display tracking-tight mb-6 text-foreground drop-shadow-lg">
          Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Engine</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium">
          Enterprise AI solutions for modern hiring. Select a module to access your secure command center.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10"
      >
        {/* Card 1: Genius Hub */}
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="glass-panel p-8 rounded-3xl cursor-pointer group border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] transition-all duration-300 flex flex-col h-full bg-gradient-to-b from-card/80 to-card/40"
          onClick={() => handleSelect('geniushub')}
        >
          <motion.div variants={iconVariants} className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors border border-primary/20">
            <FileText className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors">Genius Hub</h2>
          <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
            Enterprise Applicant Tracking System. Deep semantic resume parsing, bulk processing, and precise JD matching.
          </p>
          <div className="flex items-center text-primary font-bold text-sm tracking-wide uppercase">
            Access ATS <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        {/* Card 2: Combo (Featured in Middle) */}
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="glass-panel p-8 rounded-3xl cursor-pointer group border-combo/30 hover:border-combo/70 hover:shadow-[0_0_50px_rgba(250,204,21,0.25)] transition-all duration-300 flex flex-col h-full bg-gradient-to-b from-card/90 to-card/50 relative overflow-hidden transform md:-translate-y-4"
          onClick={() => handleSelect('combo')}
        >
          {/* Top highlight glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-combo to-transparent opacity-70" />
          
          <motion.div variants={iconVariants} className="w-16 h-16 rounded-2xl bg-combo/15 flex items-center justify-center mb-6 group-hover:bg-combo/25 transition-colors border border-combo/20">
            <Layers className="w-8 h-8 text-combo" />
          </motion.div>
          <h2 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-combo transition-colors">Enterprise Suite</h2>
          <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
            The Ultimate Combo. Unrestricted access to both the Resume ATS Engine and the Video AI Interview platform.
          </p>
          <div className="flex items-center text-combo font-bold text-sm tracking-wide uppercase">
            Access Suite <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        {/* Card 3: Forge Pro */}
        <motion.div 
          variants={cardVariants}
          whileHover="hover"
          className="glass-panel p-8 rounded-3xl cursor-pointer group border-accent/20 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col h-full bg-gradient-to-b from-card/80 to-card/40"
          onClick={() => handleSelect('forgepro')}
        >
          <motion.div variants={iconVariants} className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors border border-accent/20">
            <Video className="w-8 h-8 text-accent" />
          </motion.div>
          <h2 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-accent transition-colors">Forge Pro</h2>
          <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
            Live AI Video Interviewer. Automated technical screening, sentiment analysis, and anti-cheat telemetry auditing.
          </p>
          <div className="flex items-center text-accent font-bold text-sm tracking-wide uppercase">
            Access Video AI <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}