import React from 'react';
import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

// module.exports = {
//     ExpenseDashboardPage
// }

export default ExpenseDashboardPage;