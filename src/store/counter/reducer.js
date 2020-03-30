import CounterActionTypes from 'store/counter/types'

const INITIAL_STATE = {
  currentNumber: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterActionTypes.ON_INCREMENT:
      return {
        ...state,
        currentNumber: state.currentNumber + action.payload.amount
      }
    case CounterActionTypes.ON_DECREMENT:
      return {
        ...state,
        currentNumber: state.currentNumber - action.payload.amount
      }
    default:
      return { ...state }
  }
}
export default counterReducer
