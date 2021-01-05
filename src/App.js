import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { ExpenseForm } from "./components/ExpenseForm";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="contrainer">
        <Balance />
        <IncomeExpenses />

        <TransactionList />
        <ExpenseForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
