/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface IButton {
    title: string;
    name?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type?: "submit" | "button" | "reset" | "link";
    url?: string;
    customClass?: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    variant?: "default" | "light";
}

const Button = ({
    title,
    name,
    onClick,
    disabled = false,
    type = "button",
    url = "/",
    customClass = "",
    icon = '',
    iconPosition = "left",
    variant = "default"
}: IButton) => {
    const enabledStyle = `border ${
        variant === "default"
            ? "bg-sky text-white border-sky hover:border-dark-gray hover:text-black hover:bg-white"
            : "bg-gray text-blue border-dark-gray hover:border-sky hover:bg-sky hover:text-white"
    }`;
    const disabledStyle = "bg-sky/50 text-white border-sky cursor-not-allowed";
    
    const commonStyle = `rounded-md text-base md:text-sm lg:text-base capitalize sl-animated px-3 lg:px-5 py-1.5 lg:py-2 flex justify-center items-center ${
        disabled ? disabledStyle : enabledStyle
    }`;

    const shouldRenderIcon = icon !== "" && icon !== null && icon !== undefined;

    if (type === "link" && url) {
        return (
            <Link to={url} className={`${customClass} ${commonStyle} inline-block`}>
                <span className="flex items-center gap-2">
                    {iconPosition === "left" && shouldRenderIcon && <>{icon} </>}
                    {title}
                    {iconPosition !== "left" && shouldRenderIcon && <> {icon}</>}
                </span>
            </Link>
        );
    }

    // Fallback to button when it's not a link or `url` is not provided
    return (
        <button
            className={`${customClass} ${commonStyle}`}
            name={name}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            <span className="flex items-center gap-2">
                {iconPosition === "left" && shouldRenderIcon && <>{icon} </>}
                {title}
                {iconPosition !== "left" && shouldRenderIcon && <> {icon}</>}
            </span>
        </button>
    );
};

export default Button;
