import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Meme from '../Meme'
import { addMemeAction } from './../../store/meme/action'

const MemeList = () => {
  const { memes } = useSelector(state => state.MemeReducer)
  const dispatch = useDispatch()
  const onclick = () => {
    dispatch(addMemeAction())
  }
  if (!memes.length) {
    return <h1>no hay nada</h1>
  }
  const memeList = memes.map(meme => (
    <Meme key={meme.id} url={meme.url} name={meme.name} />
  ))
  const button = {
    borderRadius: '50px',
    backgroundColor: '#2979ff',
    padding: '5px 15px',
    color: 'white',
    position: 'fixed',
    top: '0'
  }
  const container = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '30px'
  }
  return (
    <>
      <button style={button} onClick={onclick}>
        Add meme
      </button>
      <div style={container}>{memeList}</div>
    </>
  )
}

export default MemeList
