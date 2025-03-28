import React from "react";
import Case from "../components/case";
import { ChevronRight } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";

const casesData = [
    {
        image: "/cases/google_cloud.png",
        title: "How Google Cloud used Yoodli AI to rollout new GTM pitch certification to 15,000+ employees (with 92% CSAT)",
        cards: [
            {
                title: "Internal Training",
                background: "#ffefe1",
                color: "#a43826",
            },
            {
                title: "Pitch Certification",
                background: "#fffaef",
                color: "#a0530c",
            },
            {
                title: "Sales Enablement",
                background: "#e3f8e2",
                color: "#0b6e47",
            },
        ],
    },
    {
        image: "/cases/sandler.png",
        title: "Sandler and Yoodli Partner to Offer Generative AI Sales Coaching to Sales Professionals and Leaders Worldwide",
        cards: [
            {
                title: "Generative AI",
                background: "#e6e5ff",
                color: "#040348",
            },
            {
                title: "Leadership Coaching",
                background: "#ffefe1",
                color: "#a43826",
            },
            {
                title: "Sales Enablement",
                background: "#e3f8e2",
                color: "#0b6e47",
            },
        ],
    },
    {
        image: "/cases/korn_ferry.png",
        title: "Korn Ferry and Yoodli Partner to Bring AI-powered Communication Coaching to Organizations Worldwide",
        cards: [
            {
                title: "Generative AI",
                background: "#e6e5ff",
                color: "#040348",
            },
            {
                title: "Leadership Training",
                background: "#fffaef",
                color: "#a0530c",
            },
            {
                title: "Professional Success",
                background: "#e3f8e2",
                color: "#0b6e47",
            },
        ],
    },
];

const Cases: React.FC = () => {
    return (
        <div className="bg-blue-950 text-white py-[80px] px-[30px]">
            <ScrollAnimation type="slide" direction="up">
                <div className="max-w-[1136px] flex justify-between items-center mb-5 mx-auto">
                    <h2 className="text-[20px] sm:text-[28px] font-bold">
                        Check out our case studies
                    </h2>
                    <ScrollAnimation type="slide" direction="left" delay={0.2}>
                        <span className="bg-blue-950 text-[12px] sm:text-[16px] w-[100px] font-bold text-lg flex gap-3 pl-2 rounded-md items-center cursor-pointer duration-100 hover:brightness-120">
                            See all <ChevronRight size={16} />
                        </span>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                {casesData.map((caseItem, index) => (
                    <ScrollAnimation
                        key={index}
                        type="slide"
                        direction="up"
                        delay={0.1 * (index + 1)}
                    >
                        <Case
                            image={caseItem.image}
                            title={caseItem.title}
                            cards={caseItem.cards}
                        />
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
};

export default Cases;
