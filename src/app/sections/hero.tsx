"use client";

import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { Check } from "lucide-react";

const phrases = [
    "pitch certification",
    "sales onboarding",
    "manager training",
    "job interviews",
    "public speaking",
];

const phraseHeight = 50;

const Hero: React.FC = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex(
                (prevIndex) => (prevIndex + 1) % phrases.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-5 pb-25 xl:pb-15"
            style={{
                backgroundImage: "url('/hero_back.svg')",
                backgroundSize: "cover",
                backgroundPositionY: "bottom",
                backgroundPositionX: "50%",
            }}
        >
            <div className="flex-1 max-w-[620px]">
                <div className="flex flex-col sm:flex-row sm:gap-2 lg:flex-col">
                    <h1 className="text-[26px] mt-[1px] sm:text-[32px] lg:text-[40px] font-bold w-fit lg:w-full">
                        AI Roleplays for
                    </h1>
                    <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold w-fit lg:w-full">
                        <div
                            style={{
                                overflow: "hidden",
                                height: `${phraseHeight}px`,
                                width: "100%",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    transform: `translateY(-${
                                        currentPhraseIndex * phraseHeight
                                    }px)`,
                                    transition: "transform 250ms ease-in-out",
                                }}
                            >
                                {phrases.map((phrase, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            height: `${phraseHeight}px`,
                                            lineHeight: `${phraseHeight}px`,
                                        }}
                                        className="text-transparent w-fit bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500"
                                    >
                                        {phrase}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </h2>
                </div>
                <p className="mt-4 text-[16px] text-stone-900 font-[500]">
                    Improve your communication skills with private, real-time,
                    and judgment-free roleplay coaching — powered by AI. Like
                    Grammarly, but for speech!
                </p>
                <div className="mt-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 xl:gap-6">
                    <Button
                        text="Start roleplaying"
                        variant="primary"
                        {...(windowWidth < 700
                            ? {
                                  fontSize: "16px",
                                  borderRadius: "20px",
                                  paddingWidth: "10px",
                                  paddingHeight: "10px",
                              }
                            : {
                                  fontSize: "20px",
                                  borderRadius: "25px",
                                  paddingWidth: "25px",
                                  paddingHeight: "10px",
                              })}
                    />
                    <Button
                        text="Get Yoodli for your team"
                        variant="secondary"
                        {...(windowWidth < 700
                            ? {
                                  fontSize: "16px",
                                  borderRadius: "20px",
                                  paddingWidth: "10px",
                                  paddingHeight: "10px",
                              }
                            : {
                                  fontSize: "20px",
                                  borderRadius: "25px",
                                  paddingWidth: "25px",
                                  paddingHeight: "10px",
                              })}
                    />
                </div>
                <div className="flex items-center mt-6">
                    <div className="w-4 h-4 rounded-full bg-zinc-400 flex items-center justify-center mr-3">
                        <Check size={12} strokeWidth={3} color="white" />
                    </div>
                    <span className="text-[16px] text-zinc-400 font-[700]">
                        SOC 2 Type 2 certified and GDPR compliant
                    </span>
                </div>
            </div>
            <div className="mt-8 md:mt-0 w-[400px] h-[390px] hidden lg:block">
                <video
                    src="/hero_video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[390px] h-full"
                />
            </div>
        </section>
    );
};

export default Hero;
