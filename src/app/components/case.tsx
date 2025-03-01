import React from "react";

interface CardProps {
    title: string;
    background: string;
    color: string; // You can use this for background color
}

interface CaseProps {
    image: string;
    title: string;
    cards: CardProps[];
}

const Case: React.FC<CaseProps> = ({ image, title, cards }) => {
    return (
        <div className="relative md:max-w-[368px]">
            <div className="text-center z-1 p-6 bg-white z-2 rounded-xl cursor-pointer duration-250 ease-linear hover:transform hover:translate-y-[-8px] hover:translate-x-[8px] shadow-[0_0_0_0_#524ffc] hover:shadow-[-8px_8px_0_0_#524ffc]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-md"
                />
                <div className="p-[12px]">
                    <h2 className="text-black text-[20px] font-bold text-left overflow-hidden line-clamp-3 mb-5">
                        {title}
                    </h2>
                    <div className="flex flex-col justify-center gap-3">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="w-fit max-w-full text-[14px] px-[12px] py-1 rounded-[15px] text-white cursor-pointer font-[600] text-nowrap text-ellipsis overflow-hidden"
                                style={{
                                    backgroundColor: card.background,
                                    color: card.color,
                                }}
                            >
                                {card.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;
