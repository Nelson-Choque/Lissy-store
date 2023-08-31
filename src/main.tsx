import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./model/components/Navbar.tsx";
import Hero from "./model/components/Hero.tsx";
import Footer from "./model/components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <App />
    <Footer />
  </React.StrictMode>
);
