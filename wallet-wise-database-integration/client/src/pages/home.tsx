// import { Link } from "react-router-dom";
import { Button } from "../components/functional/Buttons";
import { Plus } from "lucide-react";
import { List } from "../components/layouts/List";
import { Form } from "../components/functional/Forms";

export const Home = () => {
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
            <List title="Trip to Paris" subtitle="4 members" amount={1300} />
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};
