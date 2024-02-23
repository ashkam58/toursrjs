import React, {useState} from 'react'

const Tour = ({
id, image, name
}) => {
  return (
    <article>
      <img src={image} alt="" />
      <h4>{name}</h4>
    </article>
  )
}

export default Tour