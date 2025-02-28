import React from "react";
import Case from "../components/case";
import { ChevronRight } from "lucide-react";

const casesData = [
    {
        image: "/google_cloud.png",
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
        image: "/sandler.png",
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
        image: "/korn_ferry.png",
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
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-[24px] font-bold">
                    Check out our case studies
                </h2>
                <span className="bg-blue-950 text-[20px] font-bold text-lg flex gap-3 pl-2 rounded-md items-center cursor-pointer duration-100 hover:brightness-120">
                    See all <ChevronRight size={20} />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
