import React from 'react'
import { useSelector } from 'react-redux'

const ListMeme = props => {
  const { memes } = useSelector(state => state.MemeReducer)
  if (!memes.length) {
    return (
      <h1>no hay nada</h1>
    )
  }
  return (
    <ul>
      {memes.map(meme => {
        return <img src={meme.url} key={meme.id} />
      })}
    </ul>
  )
}

export default ListMeme
