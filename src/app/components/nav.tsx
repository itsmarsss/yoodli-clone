import React from "react";
import NavItem from "./navItem";
import Button from "./button";
import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md px-2">
            <div className="flex items-center p-4 max-w-[1984px] mx-auto">
                <div className="flex gap-2">
                    <Image
                        className="mt-2"
                        src="/yoodli_logo.svg"
                        alt="Vercel logomark"
                        width={30}
                        height={30}
                    />
                    <Image
                        className="hidden md:block"
                        src="/yoodli_text.svg"
                        alt="Vercel logomark"
                        width={120}
                        height={50}
                    />
                </div>
                <div className="flex space-x-13 ml-10">
                    <NavItem
                        text="FOR BUSINESS"
                        more={[
                            "GTM Enablement",
                            "Learning & Development",
                            "Partner Enablement",
                            "Corporate Communications",
                        ]}
                    />
                    <NavItem text="PRICING" />
                    <NavItem
                        text="ABOUT"
                        more={["Our Team", "Careers", "AI Roleplays", "FAQ"]}
                    />
                    <NavItem
                        text="USE CASES"
                        more={[
                            "Conversation Roleplays",
                            "Interview Preparation",
                            "Presentation Practice",
                            "Online Meetings",
                        ]}
                    />
                    <NavItem
                        text="RESOURCES"
                        more={[
                            "Blog",
                            "Our Partnerships",
                            "Press",
                            "Help Center",
                            "Sample Speeches",
                            "Community",
                            "Trust Center",
                        ]}
                    />
                </div>
                <div className="flex space-x-6 ml-auto">
                    <Button text="Sign In" variant="tertiary" />
                    <Button text="Get Yoodli" variant="primary" />
                    <Button text="Talk to Sales" variant="secondary" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
