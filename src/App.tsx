import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TourismPage from "./pages/TourismPage";
import MusicPage from "./pages/MusicPage";
import ManuscriptsPage from "./pages/ManuscriptsPage";
import MapsPage from "./pages/MapsPage";
import DonationsPage from "./pages/DonationsPage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Helpline from "./components/Helpline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/tourism" element={<TourismPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/manuscripts" element={<ManuscriptsPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Helpline />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
