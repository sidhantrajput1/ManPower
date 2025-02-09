import Footer from "./Shared/Footer";
import HeroPage from "./HeroPage";
import NavBar from "./Shared/NavBar";
import About from "./About";
import Carousel from "./PeopleRating";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <HeroPage />
      <About />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
