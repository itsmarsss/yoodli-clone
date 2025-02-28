import React from "react";
import Case from "../components/case";
import { ChevronRight } from "lucide-react";

const casesData = [
    {
        image: "/google_cloud.png",
        title: "How Google Cloud used Yoodli AI to rollout new GTM pitch certification to 15,000+ employees (with 92% CSAT)",
        cards: [
            { title: "Internal Training", color: "#D9BBA0" },
            { title: "Pitch Certification", color: "#F0E0D6" },
            { title: "Sales Enablement", color: "#A8D8B9" },
        ],
    },
    {
        image: "/sandler.png",
        title: "Sandler and Yoodli Partner to Offer Generative AI Sales Coaching to Sales Professionals and Leaders Worldwide",
        cards: [
            { title: "Generative AI", color: "#D9BBA0" },
            { title: "Leadership Coaching", color: "#F0E0D6" },
            { title: "Sales Enablement", color: "#A8D8B9" },
        ],
    },
    {
        image: "/korn_ferry.png",
        title: "Korn Ferry and Yoodli Partner to Bring AI-powered Communication Coaching to Organizations Worldwide",
        cards: [
            { title: "Generative AI", color: "#D9BBA0" },
            { title: "Leadership Training", color: "#F0E0D6" },
            { title: "Professional Success", color: "#A8D8B9" },
        ],
    },
];

const Cases: React.FC = () => {
    return (
        <div className="bg-blue-950 text-white py-[80px] px-[30px]">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-[24px] font-bold">
                    Check out our case studies
                </h2>
                <span className="text-[20px] font-bold text-lg flex gap-3 items-center">
                    See all <ChevronRight size={20} />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {casesData.map((caseItem, index) => (
                    <Case
                        key={index}
                        image={caseItem.image}
                        title={caseItem.title}
                        cards={caseItem.cards}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cases;
