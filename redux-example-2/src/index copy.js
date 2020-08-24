const redux = require('redux')
const createStore  = redux.createStore

const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake(){
  return {
    type: BUY_CAKE,
    info:'first redux action'
  }
}
function buyIceCream(){
  return {
    type: BUY_ICE_CREAM,
    info:'second redux action'
  }
}

//reducer
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams:20
// }
const initialCake = {
  numOfCakes: 10,
}
const initialIceCream = {
  numOfIceCreams:20
}
// const reducer = (state = initialState, action ) => {
//   switch(action.type){
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes : state.numOfCakes - 1
//     }
//     case BUY_ICE_CREAM: return {
//       ...state,
//       numOfIceCreams : state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }
const cakeReducer = (state = initialCake, action ) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numOfCakes : state.numOfCakes - 1
    }
    default: return state
  }
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

//combine reducer
const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

//store
//const store  =  createStore(reducer)
//const store  =  createStore(rootReducer)
const store  =  createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State',store.getState())

//const unsubscribe = store.subscribe(() => console.log('Updated Store', store.getState()))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
