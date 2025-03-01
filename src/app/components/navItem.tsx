import React from "react";

type NavItemProps = {
    text: string;
    more?: string[];
};

const NavItem: React.FC<NavItemProps> = ({ text, more }) => {
    return (
        <div className="relative navMain">
            <div className="navItem relative font-[500] text-[13px] text-stone-900 cursor-pointer duration-100 hover:text-indigo-500">
                {text}
            </div>
            {more && (
                <div className="navItemMore absolute bg-white shadow-xl rounded-xl flex flex-col w-max flex flex-col overflow-hidden">
                    {more.map((item, index) => (
                        <div
                            key={index}
                            className="text-stone-900 duration-200 bg-white hover:bg-blue-50 px-7 py-3 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavItem;
