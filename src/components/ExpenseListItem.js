import React from "react"; 
import {connect} from "react-redux";
import {removeExpense} from "../actions/expenses";
import ExpenseListFilters from "./ExpenseListFilters";
import { Link } from "react-router-dom";

const ExpenseListItem = ({dispatch,id,description,amount,createAt}) => (
    <div>
        <Link to = {`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createAt}</p>
    </div>
);


export default connect()(ExpenseListItem);