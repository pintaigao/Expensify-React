import React from "react";
import {connect} from "react-redux"
import ExpenseListItem from "./ExpenseListItem";
import {getVisibleExpense} from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1> 
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getVisibleExpense(state.expenses,state.filters) 
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);


// module.exports = {
//     ConnectedExpenseList
// } 

export default ConnectedExpenseList;