import Nav from "./components/nav";
import Carousel from "./sections/carousel";
import Hero from "./sections/hero";
import Cases from "./sections/cases";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <Carousel />
            <Cases />
        </>
    );
}
