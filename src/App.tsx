import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPortal from "./pages/ProductsPortal";
import AuthPage from "./pages/AuthPage";
import CommandDashboard from "./pages/CommandDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPortal />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<CommandDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}