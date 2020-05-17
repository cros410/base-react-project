import MemeActionTypes from './types'

const INITIAL_STATE = {
  memes: [{
    url: 'https://i.imgflip.com/30b1gx.jpg',
    name: 'Drake Hotline Bling',
    id: '1'
  }]
}

const MemeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MemeActionTypes.ADD_MEME:
      return {
        ...state,
        memes: [...state.memes, payload]
      }
    case MemeActionTypes.DELETE_MEME:
      return state
    default:
      return state
  }
}
export default MemeReducer
