import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";
import { Home } from "./Home";

const Index = () => {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header onOpenEnrollModal={() => setEnrollModalOpen(true)} />
      <Home onOpenEnrollModal={() => setEnrollModalOpen(true)} />
      <Footer />
      
      <Modal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        title="Enrollment Form"
        formUrl="https://forms.gle/L7r2nXz9SfwBDi9x9"
      />
    </div>
  );
};

export default Index;
