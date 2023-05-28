import Navbar from "@/pages/components/Navbar";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import AppleTVSection from "../components/AppleTVSection";
import AppleFAQSection from "../components/AppleFAQSection";
import AppleOneSection from "../components/AppleOneSection";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <GallerySection />

      <AppleTVSection />

      <AppleFAQSection />

      <AppleOneSection />

      <Footer />
    </div>
  );
};

export default MainPage;
