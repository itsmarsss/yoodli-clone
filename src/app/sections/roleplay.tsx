import Image from "next/image";

const Roleplay = () => {
    return (
        <div className="">
            <h2 className="text-center text-[28px] font-bold mt-30 mb-10">
                How Yoodli AI Roleplays work
            </h2>
            <div>
                <div>
                    <Image
                        src="/roleplay.webp"
                        alt="roleplay"
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    ></Image>
                </div>
                <div>
                    <h3 className="text-[28px] font-bold mt-10">
                        Choose your scenario
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Roleplay;
