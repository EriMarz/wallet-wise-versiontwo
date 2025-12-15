import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/groups-overview/Buttons";

export const AddExpense = () => {
    return (
        <div className= "flex flex-col gap-2">
            <div className="relative w-full text-xl ">
                <Link to="/trip-name/expenses" className="absolute left px-4 py-2 pt-4 ">
                <ChevronLeft />
                </Link>
                <h1 className="text-center font-medium pt-4">Add Expense</h1>
            </div>
           <div className="pl-4 pr-4 pt-5">
                <label className="font-bold block mb-2">Amount</label>
                <input
                    type="text"
                    className="w-full max-w-md rounded-xl border border-[#DEDEDE] bg-white p-4"
                    placeholder="$0.00"
                />
                </div>
                <div className="pl-4 pr-4 pt-5">
                <label className="font-bold block mb-2">Description</label>
                <input
                    type="text"
                    className="w-full max-w-md rounded-xl border border-[#DEDEDE] bg-white p-4"
                    placeholder="Dinner with Friends"
                />
                </div>
                <div className="pl-4 pr-4 pt-5">
                <label className="font-bold block mb-2">Paid by</label>
                <input
                    type="text"
                    className="w-full max-w-md rounded-xl border border-[#DEDEDE] bg-white p-4 mb-70"
                    placeholder="Friend's names"
                />
                </div>
                <div className="flex justify-center">
                <Button 
                    className="flex items-center gap-2 bg-[#3A7FE5] text-white px-4 py-2 rounded font-bold"
                    name="Add Expense"
                    variant="ho"
                    isActive={true}
                    onClick={() => console.log("Button Click Success!")} route={"/trip-name/expenses"}   />
                 </div>   
            </div>
    )
}