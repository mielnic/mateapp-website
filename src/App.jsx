import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ThankYouPage from "./pages/ThankYouPage";
import ContactError from "./pages/ContactError";
import ConstructionPage from "./pages/ConstructionPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/platform" element={<Platform/>} />
          <Route path="/thankyou" element={<ThankYouPage/>} />
          <Route path="*" element={<NoPage/>} />
          <Route path="/contacterror" element={<ContactError/>} />
          <Route path="/construction" element={<ConstructionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;