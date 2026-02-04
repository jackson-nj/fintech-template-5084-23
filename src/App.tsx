
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Hire from "./pages/Hire";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEquipment from "./pages/admin/AdminEquipment";
import AdminHire from "./pages/admin/AdminHire";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminCertifications from "./pages/admin/AdminCertifications";
import AdminServices from "./pages/admin/AdminServices";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/equipment" element={<AdminEquipment />} />
          <Route path="/admin/hire" element={<AdminHire />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/certifications" element={<AdminCertifications />} />
          <Route path="/admin/services" element={<AdminServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App;
