import Nav from "./components/nav";
import Carousel from "./sections/carousel";
import Hero from "./sections/hero";
import Cases from "./sections/cases";
import Featured from "./sections/featured";
import Demo from "./sections/demo";
import HowToUse from "./sections/howtouse";
import Roleplay from "./sections/roleplay";
import Pitch from "./sections/pitch";
import More from "./sections/more";
import Footer from "./sections/footer";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Carousel />
            <Cases />
            <Featured />
            <Demo />
            <HowToUse />
            <Roleplay />
            <Pitch />
            <More />
            <Footer />
        </>
    );
}
