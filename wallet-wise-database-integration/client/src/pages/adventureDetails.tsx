import { Button } from "../components/functional/Buttons";
import { ChevronLeft, Plus } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

//do we also have to think about state here? ... or are we fine with hardcoding info?

export const AdventureDetails = () => {
  return (
    <div>
      <div className="relative w-full text-xl ">
        <Link to="/" className="absolute left px-4 py-2 pt-4 ">
          <ChevronLeft />
        </Link>
        <h1 className="text-center font-medium pt-4">Adventure Details</h1>
      </div>
      <div className="border-none">
        <h1 className="pl-4 font-bold pt-4 text-[19px]">Trip to California</h1>
        <h2 className="text-4 mb-4 px-4 pl-4 text-[14px] font-medium text-grey-400">
          5 members
        </h2>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <div className="flex gap-2 justify-center w-full">
          <Button
            className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold w-35 justify-center"
            name="Expenses"
            variant="ho"
            isActive={true}
            onClick={() => console.log("Button Click Success!")}
            route={"expenses"}
          />
          <Button
            className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold w-35 justify-center"
            name="Balances"
            variant="ho"
            isActive={true}
            onClick={() => console.log("Button Click Success!")}
            route={"balances"}
          />
          {/* by clicking on balances will we route to a new page toe list balance info?... more routing required? And should another page be -esm */}
        </div>
        <Outlet />
      </div>
      <Link to="/adventure-details">
        <div className="flex justify-center items-center  bg-[#3A7FE5] w-15 h-15 rounded-[30px] ml-70 mt-40 text-white ">
          <Plus />
        </div>
      </Link>
    </div>
  );
};
