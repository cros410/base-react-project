import axios from 'axios'

import MemeActionTypes from 'store/meme/types'

const addMemes = meme => ({
  type: MemeActionTypes.ADD_MEME,
  payload: { meme }
})

export const getMemes = letter => {
  return async dispatch => {
    const API = 'https://api.imgflip.com/get_memes'
    try {
      const data = await axios.get(API)
      const { memes } = data.data.data
      if (data === undefined) {
        throw new Error('WWWW')
      }
      const random = Math.floor(Math.random() * memes.length)
      dispatch(addMemes(memes[random]))
    } catch (error) {
      console.log(error)
    }
  }
}
