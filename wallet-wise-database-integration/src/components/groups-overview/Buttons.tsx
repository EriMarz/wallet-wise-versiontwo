import type { ComponentProps, ReactNode } from "react"; 
import { Link } from "react-router-dom";

interface ButtonProps extends ComponentProps<"button"> {
    name: string;
    isActive: boolean;
    variant: "hey" | "ho"; //this might be duplicative
    plusIcon?: ReactNode;
    route: string;
}
export const Button = ({ name, isActive, variant, plusIcon, route, ...props }: ButtonProps) => {
    // Insert Base Stylings for Tailwind CSS, Create Variants for active / inactive css
    // baseStyle / isActiveStyle / inactiveStyle
     let baseStyle = "px-4 py-2 rounded-md font-semibold transition-colors duration-300 ";
     let activeStyle = "bg-blue-500 text-white hover:bg-blue-600 ";
     let inactiveStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300 ";
    return (
        <Link to={route}>
        <button className={baseStyle + (isActive ? activeStyle : inactiveStyle)} {...props} >
            {plusIcon}
            {name}
        </button>
        </Link> 
    )
};
