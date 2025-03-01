import React from "react";
import { motion } from "framer-motion";

type NavItemProps = {
    text: string;
    more?: string[];
};

const NavItem: React.FC<NavItemProps> = ({ text, more }) => {
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -5,
            scale: 0.95,
            transition: { duration: 0.2 },
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05 },
        }),
    };

    return (
        <div className="navMain relative w-fit text-stone-900 hover:text-indigo-500">
            <motion.div
                className="navItem w-fit relative font-[500] text-[13px] md:text-[12px] lg:text-[13px] text-[inherit] cursor-pointer duration-100"
                whileHover={{ scale: 1.05 }}
            >
                {text}
            </motion.div>
            {more && (
                <motion.div
                    className="navItemMore left-[50%] absolute bg-white shadow-xl rounded-xl flex flex-col w-max flex flex-col overflow-hidden z-10"
                    initial="hidden"
                    animate="visible"
                    variants={dropdownVariants}
                >
                    {more.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            className="text-[10px] md:text-[16px] text-stone-900 duration-200 bg-white hover:bg-blue-50 px-3 md:px-7 py-2 md:py-3 cursor-pointer"
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default NavItem;
