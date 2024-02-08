import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { changeNameReducer } from "./reducers/changeNameReducer";

export const counterType = {
    PLUS: "PLUS",
    MINUS: "MINUS"
}


const rooReducer = combineReducers({
    counter: counterReducer,
    name: changeNameReducer
})


export const store = createStore(rooReducer)



