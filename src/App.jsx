import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ThankYouPage from "./pages/ThankYouPage";
import ContactError from "./pages/ContactError";
import ConstructionPage from "./pages/ConstructionPage";
import TimesheetPage from "./pages/TimesheetPage";


function App() {
  return (
    <div className="h-screen bg-primary">
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
          <Route path="/timesheet" element={<TimesheetPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;