"use client";
import Header from "../components/layouts/header"
import Footer from "../components/layouts/footer";
import SliderBanner from "../components/banner";
import AboutSection from "../components/about";
import ServiceSection from "../components/service";
import ContactSection from "../components/contact";

export default function Home() {
  return (
    <div>
      <Header />
      <SliderBanner />
      <AboutSection />
      <ServiceSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
