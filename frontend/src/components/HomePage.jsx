import Footer from "./Shared/Footer";
import HeroPage from "./HeroPage";
import NavBar from "./Shared/NavBar";
import About from "./About";

function HomePage() {
    return (
        <div className="">
            <NavBar />
            <HeroPage />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage;