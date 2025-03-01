import React from "react";
import { motion } from "framer-motion";

type ButtonProp = {
    text: string;
    variant: "primary" | "secondary" | "tertiary";
    fontSize?: string;
    borderRadius?: string;
    paddingWidth?: string;
    paddingHeight?: string;
};

const Button: React.FC<ButtonProp> = ({
    text,
    variant,
    fontSize,
    borderRadius,
    paddingWidth,
    paddingHeight,
}) => {
    const baseClasses = "font-poppins relative inline-block";
    const customStyle: React.CSSProperties = {};
    if (fontSize) customStyle.fontSize = fontSize;
    if (borderRadius) customStyle.borderRadius = borderRadius;
    if (paddingWidth) customStyle.paddingLeft = paddingWidth;
    if (paddingHeight) customStyle.paddingTop = paddingHeight;
    if (paddingWidth) customStyle.paddingRight = paddingWidth;
    if (paddingHeight) customStyle.paddingBottom = paddingHeight;

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    };

    if (variant === "secondary") {
        return (
            <motion.button
                className={`${baseClasses} w-full lg:w-fit secondary text-[16px] font-[600] px-4 py-2 rounded-md cursor-pointer duration-200 hover:brightness-90`}
                data-content={text}
                style={customStyle}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
            >
                {text}
            </motion.button>
        );
    }

    const variantClasses = {
        primary:
            "text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-500",
        tertiary:
            "text-sm text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500",
    };

    return (
        <motion.button
            className={`${baseClasses} ${variantClasses[variant]} w-full lg:w-fit text-[16px] font-[600] px-4 py-2 rounded-md cursor-pointer duration-200 hover:brightness-90`}
            style={customStyle}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
        >
            {text}
        </motion.button>
    );
};

export default Button;
