import { addExpense,editExpense,removeExpense } from "../../actions/expenses"

test("should setup remove expense action object", () => {
    const action = removeExpense({id:"123abc"});
    expect(action).toEqual({
        type:"Remove_Expense",
        id:"123abc"
    })
});

test("should setup edit expense action object",() => {
    const action = editExpense("123abc",{note:"New note value"});
    expect(action).toEqual({
        type : "Edit_Expense",
        id:"123abc",
        updates:{
            note : "New note value"
        }
    });
});

test("should setup add expense action object with provided values",() => {
    const expenseData = {
        description:"Rent",
        amount:109500,
        createAt:1000,
        note:"This was last month rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })

})

test("should setup add expense action object with default values",()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:"",
            note:"",
            amount:0,
            createAt:0
        }
    })
})

