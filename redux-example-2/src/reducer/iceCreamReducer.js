import { BUY_ICE_CREAM } from '../action/actionTypes';

const initialIceCream = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCream, action ) => {
    switch(action.type){
      case BUY_ICE_CREAM: return {
        ...state,
        numOfIceCreams : state.numOfIceCreams - 1
      }
      default: return state
    }
}

export default iceCreamReducer