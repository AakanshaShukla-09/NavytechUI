import React from "react";
import HeroSection from "./HeroSection";
import SocialProof from "./SocialProof";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Portfolio from "./Portfolio";
import Article from "./Article";
import About from "./About";
import Contact from "./Contact";
import UserProfile from "../api/UserProfile";
import MyHeader from "../header/MyHeader";
import Footer from "../footer/Footer";

function Dashboard() {
  return (
    <div>
      <MyHeader />
      <HeroSection />
      {/*<SocialProof />*/}
      <Services />
      <Portfolio />
      <About />
      <Testimonial />
      <Article />
      {/* <Contact /> */}
      {/*<UserProfile />*/}
      <Footer />
    </div>
  );
}

export default Dashboard;
