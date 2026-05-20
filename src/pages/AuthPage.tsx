import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, User, KeyRound, AlertCircle } from "lucide-react";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // Get the product they clicked from the URL (defaults to combo if missing)
  const product = searchParams.get("product") || "combo";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🎨 DYNAMIC BRANDING: Changes UI colors based on selection
  const config = {
    geniushub: { name: "Genius Hub", color: "text-primary", border: "focus:border-primary", bg: "bg-primary", hover: "hover:bg-primary/90" },
    forgepro: { name: "Forge Pro", color: "text-accent", border: "focus:border-accent", bg: "bg-accent", hover: "hover:bg-accent/90" },
    combo: { name: "Enterprise Suite", color: "text-combo", border: "focus:border-combo", bg: "bg-combo", hover: "hover:bg-combo/90" }
  }[product as keyof typeof config] || config.combo;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 🔐 SECURE ROUTING LOGIC: Distinct passwords for distinct modules
    const isValid =
      (product === "geniushub" && username === "admin" && password === "ats2026") ||
      (product === "forgepro" && username === "admin" && password === "forgepro2026") ||
      (product === "combo" && username === "admin" && password === "suite2026");

    if (isValid) {
      // Store their session and which product they bought!
      sessionStorage.setItem("master_auth", "true");
      sessionStorage.setItem("active_product", product);
      navigate("/dashboard"); // We will build this in Step 4!
    } else {
      setError("Invalid credentials for this specific module.");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6">
      <div className="bg-watermark" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <button 
          onClick={() => navigate("/")}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </button>

        <div className={`glass-panel p-8 rounded-2xl border-t-4 ${
          product === 'geniushub' ? 'border-t-primary' : 
          product === 'forgepro' ? 'border-t-accent' : 'border-t-combo'
        }`}>
          <div className="text-center mb-8">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-card border border-border/50 shadow-lg`}>
              <Lock className={`w-8 h-8 ${config.color}`} />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              Login to <span className={config.color}>{config.name}</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">Enter your secure credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center text-destructive text-sm">
                <AlertCircle className="w-4 h-4 mr-2 shrink-0" /> {error}
              </div>
            )}

            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Username (Hint: admin)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full bg-background/50 border border-border/50 rounded-lg py-3 pl-10 pr-4 text-foreground outline-none transition-all ${config.border}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-background/50 border border-border/50 rounded-lg py-3 pl-10 pr-4 text-foreground outline-none transition-all ${config.border}`}
                />
              </div>
            </div>

            <button 
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all shadow-lg mt-6 ${config.bg} ${config.hover}`}
            >
              Authenticate & Enter
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}