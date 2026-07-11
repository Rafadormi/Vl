
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Portfolio from "./pages/Portfolio";
import Parceiros from "./pages/Parceiros";
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

import Servicos from "./pages/Servicos";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Páginas de Serviços
import PortasDeVidro from "./pages/servicos/PortasDeVidro";
import BoxParaBanheiro from "./pages/servicos/BoxParaBanheiro";
import GuardaCorpoCorrimao from "./pages/servicos/GuardaCorpoCorrimao";
import EnvidracamentoSacadas from "./pages/servicos/EnvidracamentoSacadas";
import FachadasDeVidro from "./pages/servicos/FachadasDeVidro";
import DivisoriasDeVidro from "./pages/servicos/DivisoriasDeVidro";
import EspelhosDecorativos from "./pages/servicos/EspelhosDecorativos";
import EsquadriaAluminio from "./pages/servicos/EsquadriaAluminio";
import ManutencaoReparos from "./pages/servicos/ManutencaoReparos";
import VidroTemperado from "./pages/servicos/VidroTemperado";
import JanelasTrocaVidro from "./pages/servicos/JanelasTrocaVidro";
import CoberturaDeVidro from "./pages/servicos/CoberturaDeVidro";
import VitrinesComerciais from "./pages/servicos/VitrinesComerciais";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/orcamento" element={<Orcamento />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            
            {/* Rotas de Serviços */}
            <Route path="/servicos/portas-de-vidro" element={<PortasDeVidro />} />
            <Route path="/servicos/box-para-banheiro" element={<BoxParaBanheiro />} />
            <Route path="/servicos/guarda-corpo-corrimao" element={<GuardaCorpoCorrimao />} />
            <Route path="/servicos/envidracamento-sacadas" element={<EnvidracamentoSacadas />} />
            <Route path="/servicos/fachadas-de-vidro" element={<FachadasDeVidro />} />
            <Route path="/servicos/divisorias-de-vidro" element={<DivisoriasDeVidro />} />
            <Route path="/servicos/espelhos-decorativos" element={<EspelhosDecorativos />} />
            <Route path="/servicos/esquadrias-aluminio" element={<EsquadriaAluminio />} />
            <Route path="/servicos/manutencao-reparos" element={<ManutencaoReparos />} />
            <Route path="/servicos/vidro-temperado" element={<VidroTemperado />} />
            <Route path="/servicos/janelas-troca-vidro" element={<JanelasTrocaVidro />} />
            <Route path="/servicos/cobertura-de-vidro" element={<CoberturaDeVidro />} />
            <Route path="/servicos/vitrines-comerciais" element={<VitrinesComerciais />} />
            
            {/* Customer Protected Routes */}
            <Route path="/customer/profile" element={
              <ProtectedRoute>
                <div>Perfil do Cliente (Em desenvolvimento)</div>
              </ProtectedRoute>
            } />
            <Route path="/customer/quotes" element={
              <ProtectedRoute>
                <div>Meus Orçamentos (Em desenvolvimento)</div>
              </ProtectedRoute>
            } />
            <Route path="/customer/projects" element={
              <ProtectedRoute>
                <div>Meus Projetos (Em desenvolvimento)</div>
              </ProtectedRoute>
            } />
            
            {/* Admin Protected Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* Catch-all route deve ficar por último */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
