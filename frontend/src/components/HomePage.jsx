import Footer from "./Shared/Footer";
import HeroPage from "./HeroPage";
import NavBar from "./Shared/NavBar";
import About from "./About";
import WhyChoose from "./WhyChoose";
// import Carousel from "./PeopleRating";
// import Accordian from "./Accordinan";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <HeroPage />
      <About />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default HomePage;
