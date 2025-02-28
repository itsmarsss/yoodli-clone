import React from "react";

type NavItemProps = {
    text: string;
};

const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return <div className="font-[500] text-[12px] text-stone-900">{text}</div>;
};

export default NavItem;
