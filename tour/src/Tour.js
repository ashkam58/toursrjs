import React, {useState} from 'react'

const Tour = ({
id, image, name,price, info, removeTour
}) => {
  const [readMore, setReadMore] = useState(false)


  return (
    <article className='single-tour'>
      <img src={image} alt="" />
      <footer>
      <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0,200)}`}....
      <button onClick={()=>setReadMore(!readMore)}>{readMore ? 'show less' : 'Read more'}</button></p>
      <button className="delete-btn" onClick={()=>removeTour(id)}>
        not-interested
      </button>
      </footer>
    </article>
  )
}

export default Tour