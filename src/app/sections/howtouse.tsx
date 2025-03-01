"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";

const HowToUse = () => {
    const [activeTab, setActiveTab] = useState("GTM Enablement");

    const getBullets = (tab: string) => {
        switch (tab) {
            case "GTM Enablement":
                return [
                    "Upload your custom content, best practices, methodology",
                    "Ramp and certify reps with near-realistic roleplays",
                    "Quantify performance, export reports, and track progress over time",
                ];
            case "Learning & Development":
                return [
                    "Set benchmarks with quantifiable speaking analytics such as pacing, conciseness, and sentence starters",
                    "Customize scenarios for roleplay practice",
                    "Track progress over time, in aggregate, across cohorts",
                ];
            case "Partner Enablement":
                return [
                    "Upload your custom content and certification rubric",
                    "Simulate quizzes and credentialing through near-realistic roleplays",
                    "Quantify performance, export reports, and track progress over time",
                ];
            case "Corporate Communications":
                return [
                    "Upload your brand guide, talking points, and custom content",
                    "Simulate realistic AI roleplays (media training, exec comms)",
                    "Track your progress over time",
                ];
            default:
                return [];
        }
    };

    const getMedia = (tab: string) => {
        switch (tab) {
            case "GTM Enablement":
                return "/htu/enablement.webp";
            case "Learning & Development":
                return "/htu/learning.webp";
            case "Partner Enablement":
                return "/htu/partner.webp";
            case "Corporate Communications":
                return "/htu/corporate.webp";
            default:
                return "";
        }
    };

    // Motion variants for the content animation
    const contentVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    const imageVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
    };

    return (
        <div className="p-5 bg-white">
            <ScrollAnimation
                type="slide"
                direction="up"
                delay={0.1}
                duration={0.5}
            >
                <h2 className="text-center text-[28px] font-bold mt-30 mb-10">
                    How will you use Yoodli?
                </h2>
            </ScrollAnimation>
            <ScrollAnimation
                type="slide"
                direction="up"
                delay={0.2}
                duration={0.5}
            >
                <div className="max-w-[1100px] bg-blue-50 p-5 lg:py-5 lg:px-15 rounded-2xl mx-auto shadow-md">
                    <div className="flex flex-row gap-2 overflow-auto">
                        {[
                            "GTM Enablement",
                            "Learning & Development",
                            "Partner Enablement",
                            "Corporate Communications",
                        ].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 flex-1 transition-colors duration-200 font-[16px] text-stone-900 font-bold border-b-5 cursor-pointer ${
                                    activeTab === tab
                                        ? "border-stone-900"
                                        : "border-transparent"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row justify-between mt-[40px] lg:gap-10">
                        {/* Animated bullet list container */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${activeTab}`}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="h-[325px] max-w-[560px] flex flex-col justify-between py-5 place-self-start"
                            >
                                <div className="h-[200px] sm:h-[175px] flex flex-col justify-between">
                                    {getBullets(activeTab).map(
                                        (bullet: string, index: number) => (
                                            <div
                                                key={index}
                                                className="flex flex-row items-center sm:ml-5"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center mr-5">
                                                    <Check
                                                        size={15}
                                                        strokeWidth={3}
                                                        color="white"
                                                    />
                                                </div>
                                                <p className="w-[calc(100%-40px)]">
                                                    {bullet}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>

                                <span className="font-bold text-indigo-500 cursor-pointer py-2 px-4 rounded-2xl w-fit hover:bg-indigo-50">
                                    Learn more
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        {/* Animated image container */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`image-${activeTab}`}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    className="mx-auto lg:mr-15 lg:mt-[-40px] w-[280px] lg:w-[350px] lg:h-[350px]"
                                    src={getMedia(activeTab)}
                                    alt={activeTab}
                                    width={350}
                                    height={350}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default HowToUse;
