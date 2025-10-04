import DownloadAppSection from "../components/common/DownloadAppSection";
import FeaturesSection from "../components/common/FeaturesSection";
import HeroSection from "../components/common/HeroSection";
import StorageSection from "../components/common/StorageSection";
import SubscribeSection from "../components/common/SubscribeSection";
import TestimonialsSection from "../components/common/TestimonialsSection";
import TryFreeSection from "../components/common/TryFreeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <StorageSection />
      <FeaturesSection />
      <DownloadAppSection />
      <TestimonialsSection />
      <SubscribeSection />
      
      <TryFreeSection />
    </>
  );
};

export default Home;
