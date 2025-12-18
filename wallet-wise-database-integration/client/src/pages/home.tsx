// import { Link } from "react-router-dom";
import { Button } from "../components/functional/Buttons";
import { Plus } from "lucide-react";
import { List } from "../components/layouts/List";
import { Form } from "../components/functional/Forms";
import { useState, useEffect } from "react"; //not sure if we'll need useEffect yet - esm
//import{ Adventure } from "../../server/models/adventure.ts" //not sure why red sqiggle line of doom is here .... so i just added the interface below- esm

interface Adventure {
    id: number;
    title: string;
    description: string;
    cost: number
}

export const Home = () => {
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  
  
  const fetchAdventures = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/adventures");
      const data = await response.json();
      setAdventures(data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  }
  
  //not sure if im using useEffect correctly here or if it needs to be moved elsewhere - esm
  useEffect(() => {
    fetchAdventures();
  }, [setAdventures]); //An empty dependency array ensures this runs once on mount
  
  return (
    <div>
      <div>
        <Form />
        <div className="flex justify-center">
          <Button
            className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
            name="Start New Adventure"
            variant="ho"
            isActive={true}
            onClick={() => console.log("Button Click Success!")}
            plusIcon={<Plus />}
            route="/create-adventure"
          />
        </div>
        <h2 className="font-semibold text-4 pl-3 mt-4 mb-4">All Adventures</h2>
        <div>
          <div className="flex flex-col justify-center items-center gap-3">
            {/* guessing i'm using map incorrectly  */}
            
            {adventures.map((adventure) => (
              <List
                key={adventure.id}
                title={adventure.title}//should this be adventure.name instead of title? Thinking name is in the adventure table and title might not be there... but also using title bc of the interface... or should I change the title to name in interface - esm
                subtitle={adventure.description}
                amount={adventure.cost}
              />
            ))
            
            }

            {/* <List title="Trip to Paris" subtitle="4 members" amount={1300} />
            <List title="Trip to Tokyo" subtitle="3 members" amount={2000} />
            <List
              title="Trip to Cartagena"
              subtitle="7 members"
              amount={4000}
            />
            <List
              title="Trip to Islamabad"
              subtitle="5 members"
              amount={1800}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
