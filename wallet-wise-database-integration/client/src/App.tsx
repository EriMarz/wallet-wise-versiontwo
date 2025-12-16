import { Form } from "./components/functional components/Forms";
import { Button } from "./components/functional components/Buttons";
import { List } from "./components/layouts components/List";
import { Plus } from "lucide-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CreateAdventure } from "./pages/createAdventure";
import { GroupTripDetails } from "./pages/adventureDetails";
import { AddExpense } from "./pages/addExpense";
import { Expenses } from "./pages/expenses";
import { Balances } from "./pages/balances";

const FirstPage = () => {
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/create-adventure" element={<CreateAdventure />} />
          <Route path="/" element={<FirstPage />} />
          <Route path="/trip-name" element={<GroupTripDetails />}>
            <Route index element={<Navigate to="expenses" replace />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="balances" element={<Balances />} />
          </Route>
          <Route path="/adventure-details" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
