import React from "react";

interface CardProps {
    title: string;
    color: string; // You can use this for background color
}

interface CaseProps {
    image: string;
    title: string;
    cards: CardProps[];
}

const Case: React.FC<CaseProps> = ({ image, title, cards }) => {
    return (
        <div className="text-center my-5 p-[24px] bg-white rounded-[12px]">
            <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-[7px]"
            />
            <h2 className="text-2xl my-2">{title}</h2>
            <div className="flex justify-center gap-2">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex-1 p-4 rounded text-white`}
                        style={{ backgroundColor: card.color }}
                    >
                        {card.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Case;
