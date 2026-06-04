import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuickBooking } from "./components/QuickBooking";
import { ProcessSteps } from "./components/ProcessSteps";
import { ServiceCommitments } from "./components/ServiceCommitments";
import { Reviews } from "./components/Reviews";
import { ServiceAreas } from "./components/ServiceAreas";
import { QRCodeSection } from "./components/QRCodeSection";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { StickyBottomBar } from "./components/StickyBottomBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickBooking />
      <ProcessSteps />
      <ServiceCommitments />
      <Reviews />
      <ServiceAreas />
      <QRCodeSection />
      <Footer />
      <FloatingButtons />
      <StickyBottomBar />
    </div>
  );
}