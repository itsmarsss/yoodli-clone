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

    return (
        <section
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-5 pb-20"
            style={{
                backgroundImage: "url('/hero_back.svg')",
                backgroundSize: "cover",
                backgroundPositionY: "bottom",
            }}
        >
            <div className="flex-1">
                <h1 className="text-[40px] font-bold">AI Roleplays for</h1>
                <h2 className="text-[40px] font-bold mt-2">
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
                <p className="mt-4 text-[16px] text-stone-900 font-[500]">
                    Improve your communication skills with private, real-time,
                    and judgment-free roleplay coaching — powered by AI. Like
                    Grammarly, but for speech!
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-6">
                    <Button
                        text="Start roleplaying"
                        variant="primary"
                        fontSize="20px"
                        borderRadius="25px"
                        paddingWidth="25px"
                        paddingHeight="10px"
                    />
                    <Button
                        text="Get Yoodli for your team"
                        variant="secondary"
                        fontSize="20px"
                        borderRadius="25px"
                        paddingWidth="25px"
                        paddingHeight="10px"
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
            <div className="mt-8 md:mt-0 w-[455px] h-[390px]">
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
