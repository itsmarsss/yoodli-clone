import React from "react";

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

    if (variant === "secondary") {
        return (
            <button
                className={`${baseClasses} w-full lg:w-fit secondary text-[16px] font-[600] px-4 py-2 rounded-md cursor-pointer duration-100 hover:brightness-90`}
                data-content={text}
                style={customStyle}
            >
                {text}
            </button>
        );
    }

    const variantClasses = {
        primary:
            "text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-500",
        tertiary:
            "text-sm text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} w-full lg:w-fit text-[16px] font-[600] px-4 py-2 rounded-md cursor-pointer duration-100 hover:brightness-90`}
            style={customStyle}
        >
            {text}
        </button>
    );
};

export default Button;
