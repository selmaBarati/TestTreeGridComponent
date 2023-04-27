import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const RootReducer = combineReducers({
    cake : cakeReducer , 
    iceCream : iceCreamReducer
})

export default RootReducer;