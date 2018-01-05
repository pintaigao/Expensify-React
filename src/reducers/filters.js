import moment from "moment"

const filterReducerDefaultState = {
    text:"",
    sortBy: "date",
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
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

export default filterReducer;