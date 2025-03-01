import React from "react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

interface CardProps {
    title: string;
    background: string;
    color: string;
}

interface CaseProps {
    image: string;
    title: string;
    cards: CardProps[];
}

const Case: React.FC<CaseProps> = ({ image, title, cards }) => {
    return (
        <ScrollAnimation type="slide" direction="up">
            <div className="relative w-[100%] lg:max-w-[368px]">
                <div className="text-center z-1 p-6 bg-white z-2 rounded-xl cursor-pointer duration-250 ease-linear hover:transform hover:translate-y-[-8px] hover:translate-x-[8px] shadow-[0_0_0_0_#524ffc] hover:shadow-[-8px_8px_0_0_#524ffc]">
                    <div className="flex justify-center items-center max-h-[200px] overflow-hidden rounded-md">
                        <Image
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                            width={368}
                            height={100}
                        />
                    </div>

                    <div className="p-[12px]">
                        <h2 className="text-black text-[20px] font-bold text-left overflow-hidden line-clamp-3 mb-5">
                            {title}
                        </h2>
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-left lg:justify-center gap-3">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-fit max-w-full text-[10px] sm:text-[14px] px-[12px] py-1 rounded-[15px] text-white cursor-pointer font-[600] text-nowrap text-ellipsis overflow-hidden"
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
        </ScrollAnimation>
    );
};

export default Case;
