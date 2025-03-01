"use client";

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
import { useEffect } from "react";

export default function Home() {
    // Preload animation script
    useEffect(() => {
        const preloadFramerMotion = async () => {
            try {
                await import("framer-motion");
                console.log("Framer Motion preloaded successfully");
            } catch (error) {
                console.error("Failed to preload Framer Motion", error);
            }
        };

        preloadFramerMotion();
    }, []);

    return (
        <div className="w-screen overflow-x-clip">
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
        </div>
    );
}
