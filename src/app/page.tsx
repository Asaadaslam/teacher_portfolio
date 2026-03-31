import Header from "@/components/Header/Header";
// import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import AboutBottomImage from "@/components/AboutSection/AboutBottomImage/AboutBottomImage";
import  Experience from "@/components/Experience/Experience";
import Services from "@/components/Services.Section/Services";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    <Header/>
    {/* <HeroSection/> */}
    <AboutSection/>
    <AboutBottomImage/>
    <Experience/>
    <Services/>
    <Stats />
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
