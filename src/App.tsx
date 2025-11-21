import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import { Home } from "@/pages/Home";
import { Courses } from "@/pages/Courses";
import { Order } from "@/pages/Order";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background font-body">
            <Header onOpenEnrollModal={() => setEnrollModalOpen(true)} />
            
            <Routes>
              <Route
                path="/"
                element={<Home onOpenEnrollModal={() => setEnrollModalOpen(true)} />}
              />
              <Route
                path="/courses"
                element={<Courses onOpenEnrollModal={() => setEnrollModalOpen(true)} />}
              />
              <Route
                path="/order"
                element={<Order onOpenOrderModal={() => setOrderModalOpen(true)} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />

            {/* Modals */}
            <Modal
              isOpen={enrollModalOpen}
              onClose={() => setEnrollModalOpen(false)}
              title="Enrollment Form"
              formUrl="https://forms.gle/L7r2nXz9SfwBDi9x9"
            />
            
            <Modal
              isOpen={contactModalOpen}
              onClose={() => setContactModalOpen(false)}
              title="Contact Us"
              formUrl="https://forms.gle/EioB5iiSvTym3yeLA"
            />
            
            <Modal
              isOpen={orderModalOpen}
              onClose={() => setOrderModalOpen(false)}
              title="Place Your Order"
              formUrl="https://forms.gle/AUT9suo7jX4Svo2Z9"
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
