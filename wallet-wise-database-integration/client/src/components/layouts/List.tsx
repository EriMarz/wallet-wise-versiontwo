
import React from "react";

// #3A7FE5

interface ListProps {
    title: string;
    subtitle: string;
    amount: number;
}

export const List = ({title, subtitle, amount}: ListProps) => {
    return(
        <div className="flex justify-between items-center rounded-[10px] border border-[#DEDEDE] bg-white text-black w-80 h-15 p-2 font-medium  ">
            <div>
            <p className="text-[16px]"> {title}  </p>
               <p className="text-[14px text-[#8F8F8F] font-medium">{subtitle}</p> 
            </div>
            <div className="flex justify-end items-center align-text-">
              <p className="text-[16px] font-bold"> ${amount} </p>
            </div>
        </div>
    )
}