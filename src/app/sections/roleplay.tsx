"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/button";

const Roleplay = () => {
    const [activeCard, setActiveCard] = useState(0);
    const images = [
        "/roleplay/yoodli-HIW2.webp",
        "/roleplay/yoodli-HIW3.webp",
        "/roleplay/yoodli-HIW4.webp",
    ];

    const cardTexts = [
        {
            title: "Choose your scenario",
            desc: "Customize your conversation partner and speaking goals",
        },
        {
            title: "Start speaking",
            desc: "Yoodli will ask you AI-powered follow-up questions",
        },
        {
            title: "View your results",
            desc: "Get real-time feedback on your content, delivery, and progress over time",
        },
    ];

    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            entry.target.getAttribute("data-index")
                        );
                        setActiveCard(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        cards.forEach((card) => observer.observe(card));
        return () =>
            cards.forEach((card) => {
                observer.unobserve(card);
            });
    }, []);

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <>
            <div className="py-20 pb-0 mt-25 bg-[#f6f8ff]">
                <h2 className="text-center text-[28px] font-bold mb-10">
                    How Yoodli AI Roleplays work
                </h2>

                {windowWidth > 1320 && (
                    <div className="flex mx-auto max-w-[1300px] h-[2100px]">
                        <div
                            className="relative w-[578px] h-[464px] sticky top-[50%] transform translate-y-[-50%] left-0 ml-32 mt-80 p-[64px] rounded-xl"
                            style={{
                                background:
                                    "linear-gradient(72deg, #eff5fd 0%, #eeeefe 79%)",
                            }}
                        >
                            {images.map((src, index) => (
                                <div
                                    key={"image-" + index}
                                    className={`absolute top-[64px] left-[64px] w-[448px] h-[333px] transition-opacity duration-500 ${
                                        index === activeCard
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <Image
                                        src={src}
                                        alt={cardTexts[index].title}
                                        layout="fill"
                                        className="rounded-lg w-[448px] h-[333px]"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="h-screen space-y-120 p-5 mt-60 transform translate-x-[-60px]">
                            {cardTexts.map((cardText, index) => (
                                <div
                                    key={"card-" + index}
                                    className="w-[560px] h-fit p-[32px] bg-white rounded-2xl shadow-sm card"
                                    data-index={index}
                                >
                                    <h3 className="mb-[16px] font-bold text-[28px]">
                                        {cardText.title}
                                    </h3>
                                    <p className="text-[16px] font-[500]">
                                        {cardText.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {windowWidth <= 1320 && (
                    <div className="px-10 w-full h-fit flex flex-col gap-10 mb-35 justify-center align-center max-w-[600px] mx-auto">
                        {images.map((src, index) => (
                            <div key={"image-cont-" + index}>
                                <div
                                    key={"image-" + index}
                                    className="grid place-item-center w-full p-5 pb-0 rounded-2xl shadow-sm"
                                    style={{
                                        background:
                                            "linear-gradient(72deg, #eff5fd 0%, #eeeefe 79%)",
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={cardTexts[index].title}
                                        className="rounded-lg w-fit"
                                        width={1000}
                                        height={100}
                                    />
                                </div>
                                <div
                                    key={"card-" + index}
                                    className="w-full h-fit p-[32px] bg-white rounded-2xl shadow-sm card"
                                    data-index={index}
                                >
                                    <h3 className="mb-[16px] font-bold text-[20px] lg:text-[28px]">
                                        {cardTexts[index].title}
                                    </h3>
                                    <p className="text-[12px] lg:text-[16px] font-[500]">
                                        {cardTexts[index].desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="overflow-hidden w-full h-[300px] mt-[-150px]">
                <div
                    className="grid justify-items-center items-start w-[100.1%] h-full bg-indigo-950"
                    style={{
                        backgroundImage: "url('/hero_back.svg')",
                        backgroundSize: "cover",
                        backgroundPositionY: "bottom",
                        backgroundPositionX: "50%",
                    }}
                >
                    <div className="mt-20">
                        <Button
                            text={"Start roleplaying"}
                            variant={"primary"}
                            fontSize="20px"
                            borderRadius="25px"
                            paddingWidth="25px"
                            paddingHeight="10px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Roleplay;
