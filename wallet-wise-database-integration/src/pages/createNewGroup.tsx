import { Link } from "react-router-dom";
import { Button } from "../components/groups-overview/Buttons";
import {ChevronLeft, Plus}  from 'lucide-react'
import { useState } from "react";

//do we need to input state here since we're taking in data? - esm
//import {useState} from "react"
//context API is a thing: The Context API provides a way to pass data deeply through the component tree without explicitly passing props down at every level (prop drilling).
// You create a Context and a Provider component that holds the state.
// Consumer components within the Provider's scope can access the context value using useContext

export const CreateNewGroup = () => {
    //we need to create state to hold the input value
    const [adventureName, setAdventureName] = useState(""); //state to hold the input value
    // const navigate = useNavigate();//maybe we need this to route to the next page after creating a group - esm
    const handleSubmit = () => {
        //function to handle the form submission
        
        console.log("Adventure Name: ", adventureName);
        //after submitting, we can navigate to the next page
        //navigate("/trip-name"); //route to the trip name page after creating a group - esm
    }
//do we start with fetch here to post the new group to the db? - esm
    fetch('http://localhost:3000/api/adventure', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: adventureName }), //send the adventure name to the server
    })
    return (
        <div>
            <div className="relative w-full text-xl ">
                <Link to="/" className="absolute left px-4 py-2 pt-4 ">
                <ChevronLeft />
                </Link>
                <h1 className="text-center font-medium pt-4 ">Create Adventure</h1>
            </div>
           <h2 className="font-bold text-4 mt-6 mb-2 px-4 pl-4 text-[19px]">Create a New Adventure</h2>
           <p className="text-4 mb-4 px-4 pl-4 text-[14px] font-medium  ">ADVENTURE NAME</p>
        <div className="flex justify-center">
        <input type="text" className=" w-90 rounded-xl border border-[#DEDEDE] bg-white p-4 mb-60" placeholder = ""/>
        </div>
        <div className="flex justify-center">
            <Button 
                className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                name= "Create New Group" 
                variant= "ho" 
                isActive={true}
                onClick={()=> console.log("Button Click Success!")}
                plusIcon={<Plus />}
                route = "/trip-name"
            />
            </div>
        </div>
    )
}