import moment from "moment";
/* 作用：观察filter后的输出结果 */
const getVisibleExpense = (expenses,{text,sortBy,startDate,endDate}) => { 
    // console.log(expenses);
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate !== "number" || expense.createAt >= startDate;
        // const endDateMatch = typeof endDate !== "number" || expense.createAt <= endDate;
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment,"day") : true ;  
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment,"day") : true ;
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


 module.exports = {getVisibleExpense};

 /* 如果是不带default 的 exports，外面的引用必须和现在这个定义好的名称是一样的 
  * 带default，外面可以重命名 
  */

