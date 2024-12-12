import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"

export const ExpenseList = () => {
    const { state } = useBudget()

    const filterExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => state.expenses.length === 0, [filterExpenses])
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            {isEmpty ?
                <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
                :
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos:</p>
                    {filterExpenses.map(expense => (
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}>
                        </ExpenseDetail>
                    ))}
                </>
            }
        </div>
    )
}
