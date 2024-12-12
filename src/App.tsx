import { useEffect, useMemo } from "react"
import { BudgetForm } from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import { BudgetTracker } from "./components/BudgetTracker"
import { ExpenseList } from "./components/ExpenseList"
import { FilterByCategory } from "./components/FilterByCategory"
import ExpenseModal from "./components/ExpenseModal"

function App() {
  const { state } = useBudget()

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ?
          <BudgetTracker></BudgetTracker>
          :
          <BudgetForm></BudgetForm>}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory></FilterByCategory>
          <ExpenseList></ExpenseList>
          <ExpenseModal></ExpenseModal>
        </main>
      )}
    </>
  )
}

export default App
