import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyData = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1234,
    date: new Date(2021, 8, 28),
  },
  {
    id: "e2",
    title: "Books",
    amount: 1234,
    date: new Date(2021, 8, 28),
  },
  {
    id: "e3",
    title: "Food",
    amount: 1234,
    date: new Date(2021, 8, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
