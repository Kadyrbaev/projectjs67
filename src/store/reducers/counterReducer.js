import { counterType } from "..";


const initialState = {
    num: 50
}
export const counterReducer=(state = initialState, action)=>{
    console.log("DISP");
    if(action.type === "PLUS"){
        return {
            ...state,
            num: 100
        }
    }
    return state

}
