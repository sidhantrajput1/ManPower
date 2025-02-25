import Footer from "./Shared/Footer";
import HeroPage from "./HeroPage";
import NavBar from "./Shared/NavBar";
import AboutSection from "./AboutSection";
import WhyChoose from "./WhyChoose";
import OurService from "./OurService";
import Review from "./Review";
// import Carousel from "./PeopleRating";
import Accordian from "./Accordinan";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <HeroPage />
      <AboutSection />
      <Accordian />
      <WhyChoose />
      <OurService />
      <Review />
      <Footer />
    </div>
  );
}

export default HomePage;
