import MemeActionTypes from 'store/meme/types'

const INITIAL_STATE = {
  memes: []
}

const MemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MemeActionTypes.ADD_MEME:

      //   ...state,
      return {
        ...state,
        memes: [...state.memes, action.payload.meme]
      }
    default:
      return state
  }
}
export default MemeReducer
