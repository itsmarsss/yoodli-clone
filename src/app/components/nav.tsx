import React from "react";
import NavItem from "./navItem";
import Button from "./button";
import Image from "next/image";

const Nav = () => {
    return (
        <nav className="flex items-center p-4 bg-white sticky top-0 z-50 shadow-md">
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
                <NavItem text="FOR BUSINESS" />
                <NavItem text="PRICING" />
                <NavItem text="ABOUT" />
                <NavItem text="USE CASES" />
                <NavItem text="RESOURCES" />
            </div>
            <div className="flex space-x-6 ml-auto mr-5">
                <Button text="Sign In" variant="tertiary" />
                <Button text="Get Yoodli" variant="primary" />
                <Button text="Talk to Sales" variant="secondary" />
            </div>
        </nav>
    );
};

export default Nav;
