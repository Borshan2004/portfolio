import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-body text-ink antialiased">
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}