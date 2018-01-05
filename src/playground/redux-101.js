const createStore = require("redux").createStore;



//Action Generator - functions that return action object

// const incrementCount = (payload = {}) => ({
//         type : "INCREMENT",
//         incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });
const incrementCount = ({incrementBy = 1} = {}) => ({
        type : "INCREMENT",
        incrementBy:incrementBy
});
// const incrementCount = (count) => ({
//     type:"INCREMENT",
//     countNumber :typeof count === "number" ? count : 1
// })

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : "DECREMENT", 
    decrementBy:decrementBy
});

const resetCount = () => ({
    type : "Reset"
})

const setCount = ({count}) => {
    type : "Set"
    count:count
}

//Reducers
//1.Reducers are pure functions
//2.Never change state or action 


const countReducer = (state = { count:0 },action) => {
    switch(action.type){
        case "INCREMENT":
        return {
                count: state.count + action.incrementBy
                // count: state.count + action.countNumber
            };
        case "DECREMENT":
            
            return {
                count : state.count - action.decrementBy
            };

        case "Reset":
            return{
                count:0
            };

        case "Set":
            return {
                count : action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);




const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy : 5}))
// store.dispatch(incrementCount(5));
store.dispatch(incrementCount()); 



// unsubscribe();

store.dispatch(setCount({count:101}));
// increment,decrement,rest
