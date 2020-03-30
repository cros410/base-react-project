import React from 'react'
import { HomeWrapper } from './Home.styles'
import { getMemes } from 'store/meme/action'
import { useDispatch } from 'react-redux'
import ListMeme from 'components/Meme/ListMeme'
const Home = () => {
  const dispatch = useDispatch()
  return (
    <HomeWrapper>
      <h3>home page!</h3>
      <button type='button' onClick={() => dispatch(getMemes())}>
        MEMES
      </button>
      <ListMeme />
    </HomeWrapper>
  )
}
export default Home
