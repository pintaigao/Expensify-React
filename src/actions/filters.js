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


module.exports = {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
}