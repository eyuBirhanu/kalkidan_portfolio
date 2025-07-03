// src/layouts/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen text-paragraph text-base sm:text-lg lg:text-lg font-Lato font-normal overflow-x-hidden bg-black transition-all delay-200">
      <Header />
      <main>
        <Outlet /> {/* This is where your page components will be rendered */}
      </main>
      <Footer />
    </div>
  );
}
