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

export default expensesReducer;

