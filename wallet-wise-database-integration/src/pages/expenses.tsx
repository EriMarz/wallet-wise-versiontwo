import React from "react";
import { List } from "../components/groups-overview/List"
export const Expenses = () => {
    return (  
        <div className="flex flex-col justify-center items-center gap-3 pb-20 pt-7">
            <List title="Groceries" subtitle= "Paid by you" amount= {250} />
            <List title="Dinner at restaurant" subtitle= "Paid by Erika" amount= {90}/>
            <List title="Flights" subtitle= "Paid by Arsy" amount= {1500} />
            <List title="Hotel Booking" subtitle= "Paid by youErika" amount= {600}/>
        </div>
            )
}