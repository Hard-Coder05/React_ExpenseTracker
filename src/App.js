import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 1234,
      date: new Date(2021, 8, 28),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
