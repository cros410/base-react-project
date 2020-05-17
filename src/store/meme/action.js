import axios from 'axios'
import MemeActionTypes from './types'

const addMemes = meme => ({
  type: MemeActionTypes.ADD_MEME,
  payload: meme
})

export const addMemeAction = () => {
  return async dispatch => {
    const API = 'https://api.imgflip.com/get_memes'
    try {
      const data = await axios.get(API)
      const { memes } = data.data.data
      const random = Math.floor(Math.random() * memes.length)
      dispatch(addMemes(memes[random]))
    } catch (error) {
      console.log(error)
      throw new Error('Cant get meme')
    }
  }
}
