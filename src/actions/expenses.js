import uuid from "uuid";

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


module.exports = {
    addExpense,
    editExpense,
    removeExpense
}