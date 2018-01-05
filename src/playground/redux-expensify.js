import{createStore,combineReducers} from "redux";
import uuid from "uuid";
import { randomBytes } from "crypto";

/* Function of expenseReducer */
//{} = {} <- default object(if not exist)
const addExpense = ({description = "",note = "",amount = 0,createAt = 0} = {}) => ({
    type : "ADD_EXPENSE",
    expense:{
        id : uuid(),
        description,
        note,
        amount,
        createAt
    }
});

const editExpense = (id,updates) => ({
    type : "Edit_Expense",
    id,
    updates
})

const removeExpense = ({id} = {}) => ({
    type:"Remove_Expense",
    id
});

//Expense Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [...state,action.expense]
            // return state.concat(action.expense) //push 改变了state，而concat没有改变state
        case "Remove_Expense":
            return state.filter((object) =>{ // state.filter((参数)) 参数现在代表的是state里面的一个一个元素
                return object.id !== action.id;});
            /* 或者
            return state.filter(({id}) =>{
                return id !== action.id
            });
             */
        case "Edit_Expense":
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates // 改变现有的一项
                    };
                }else{
                    return expense;
                }
            })
        default : 
            return state;
    }
};

/* Function of filterReducer */
//Action
const setTextFilter = (text = "") => ({
    type: "Set_Text_Filter",
    text
});

const sortByDate = () => ({
    type : "Sort_By_Date"
})

const sortByAmount = () => ({
    type : "Sort_By_Amount"
})

const setStartDate = (startDate) => ({
    type:"Set_Start_Date",
    startDate
})

const setEndDate = (endDate) => ({
    type:"Set_End_Date",
    endDate
})
//Filter Reducer
const filterReducerDefaultState = {
    text:"",
    sortBy: "date",
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state = filterReducerDefaultState,action) => {
    switch(action.type){
        case "Set_Text_Filter":
            return {
                ...state,
                text:action.text
            };
        case "Sort_By_Amount":
            return {
                ...state,
                sortBy:"amount"
            }
        case "Sort_By_Date":
            return {
                ...state,
                sortBy:"date"
            }
        case "Set_Start_Date":
            return {
                ...state,
                startDate:action.startDate
            }
        case "Set_End_Date":
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
}
//timestamps


const getVisibleExpense = (expenses,{text,sortBy,startDate,endDate}) => { 
    // console.log(expenses);
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === "date"){
            return a.createAt < b.createAt ? 1 : -1
        }else if(sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1; // true,b would can first
        }
    });
};

/* *************
 *  Test Area *
 *************** */

//Store creation and set State
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filterReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses,state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:"Rent",amount:100}));
// console.log(typeof expenseOne);
//然后addExpense返回的是{type : ..., expense:...}
// const expenseOnePointFive = addExpense({description:"Rent2",amount:100});
const expenseTwo = store.dispatch(addExpense({description:"Coffee",amount:300}));

//expenseOne 是一个object 所以才能reference到id
// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount : 600}));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate());   //date

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

/* We need the object like this */
const demoState = {
    expenses:[{
        id : "ddasdadada",
        description:"January Rent",
        note: 'This was the final payment for that address',
        amount:54500,
        createAt: 0
    }],
    filters:{
        text: "rent",
        sortBy : "amount", //date or amount
        startDate : undefined,
        endDate : undefined 
    }
};






// /* Another Demo */
// const user ={
//     name:"Pintaigao",
//     age : 24
// }

// console.log({age:27, ...user,location:"New York"});

// console.log(user); //{name: "Pintaigao", age: 24}
// console.log({...user});//{name: "Pintaigao", age: 24}
// console.log({...user,location:"New York"});//{name: "Pintaigao", age: 24, location: "New York"}
// console.log(user.location = "New York");//New York
// console.log({...user});//{name: "Pintaigao", age: 24, location: "New York"}
// console.log(user);//{name: "Pintaigao", age: 24, location: "New York"}
// console.log(user.location);//New York







