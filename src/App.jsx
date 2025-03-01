import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Bloggers from "./components/Bloggers";
import Themes from "./components/Themes";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Blogs from "./components/Blogs";
import ScrollTop from "./components/ScrollTop"; 


const App = () => {
  return (
    <Router>
      <ScrollTop />
      <div className="bg-[#F0E7D8]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Info />
                <Features />
                <Bloggers limit={3} />
                <Themes showAll={false} />
                <Quote />
              </>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
