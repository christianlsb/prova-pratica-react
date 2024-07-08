import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Lancamento } from "./pages";
import { Footer, Header } from "./components";

export default function RoutesApp() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lancamento" element={<Lancamento />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
