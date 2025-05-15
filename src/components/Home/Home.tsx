import React from "react";
import Hero from "./Hero/Hero";
import { FocusCardsDemo } from "@/components/Home/Destination/Destination";
import Hotel from "./Hotel/Hotel";
import ClientReviewSection from "./Review/Review";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="bg-white">
      <section id="home">
        <Hero />
      </section>
      <section id="places">
        <FocusCardsDemo />
      </section>
      <section id="hotel">
        <Hotel />
      </section>
      <section id="testimonials">
        <ClientReviewSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
