import { BUY_CAKE } from "../cakes/cakeTypes"


const initialState = {
    numOfIceCreams : 20
}

const iceCreamReducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams -1 
        }
        default : return state
    }
}

export default iceCreamReducer;