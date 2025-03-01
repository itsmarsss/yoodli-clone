import Link from "next/link";

const More = () => {
    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-gray-800 text-xl font-medium tracking-wide mb-12">
                    EXPLORE MORE YOODLI USE CASES
                </h2>

                <div className="space-y-6 md:space-y-8 max-w-xl mx-auto">
                    <Link href="/pitch-practice">
                        <div className="text-purple-600 text-4xl md:text-5xl font-bold hover:opacity-80 transition duration-300 ease-in-out">
                            Pitch Practice
                        </div>
                    </Link>

                    <Link href="/interview-preparation">
                        <div className="text-purple-600 text-4xl md:text-5xl font-bold hover:opacity-80 transition duration-300 ease-in-out">
                            Interview Preparation
                        </div>
                    </Link>

                    <Link href="/conversation-roleplays">
                        <div className="text-purple-600 text-4xl md:text-5xl font-bold hover:opacity-80 transition duration-300 ease-in-out">
                            Conversation Roleplays
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default More;
