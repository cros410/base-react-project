import React from 'react'
import { Image, Title } from './style'

const Meme = props => {
  // eslint-disable-next-line react/prop-types
  const { url, name } = props
  const style = { }
  return (
    <div style={style}>
      <Title>{name}</Title>
      <Image src={url} />
    </div>
  )
}

export default Meme
