import React from "react";

const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
];

const Featured: React.FC = () => {
    return (
        <div className="py-10">
            <h2 className="text-center text-[24px] font-bold mb-5">
                Featured in
            </h2>
            <div className="grid grid-cols-4 gap-4">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="h-16"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
