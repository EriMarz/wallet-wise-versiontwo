import React from "react";
import { List } from "../components/groups-overview/List"
export const Balances = () => {
    return (  
        <div className="flex flex-col justify-center items-center gap-3 pb-20 pt-7">
            <List title="Erika" subtitle="owes you" amount={15} />
            <List title="Arsy" subtitle="You owe" amount={50} />
             <List title="Erika" subtitle="You owe" amount={50} />
            <List title="Arsy" subtitle="owes you" amount={120} />
    </div>
            )
}