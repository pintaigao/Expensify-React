import React from 'react';
import ReactDOM from "react-dom";
import {AppRouter} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import {getVisibleExpense} from "./selectors/expenses"
import "../node_modules/normalize.css/normalize.css" 
import './styles/style.scss';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({description:"Water Bill",amount:4500}));
store.dispatch(addExpense({description:"Gas Bill",createAt:1000}));
store.dispatch(addExpense({description:"Rent",amount:109500}));

const state = store.getState();
console.log(store.getState());
const visibleExpense = getVisibleExpense(state.expenses,state.filters);
// console.log(visibleExpense);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));