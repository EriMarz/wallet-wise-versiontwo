import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CreateAdventure } from "./pages/createAdventure";
import { AdventureDetails } from "./pages/adventureDetails";
import { AddExpense } from "./pages/addExpense";
import { Expenses } from "./pages/expenses";
import { Balances } from "./pages/balances";
import { Home } from "./pages/home";

//App.tsx links all routes to renderable components through their appropriate endpoints. 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-adventure" element={<CreateAdventure />} />
          <Route path="/trip-name" element={<AdventureDetails />}>
            <Route index element={<Navigate to="expenses" replace />} /> 
            <Route path="expenses" element={<Expenses />} />
            <Route path="balances" element={<Balances />} />
          </Route>
          <Route path="login" />
          <Route path="/adventure-details" element={<AddExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
