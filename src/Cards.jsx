import React from 'react'
import "./cards.css"


const Cards = ({imgs,title,genra,rating}) => {
  return (
        <div className="movie-card">
      <img className="movie-poster" src={imgs} alt="The Godfather poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre">{genra}</p>
        <p className="movie-rating">{rating}</p>
        <button className="watch-button">Watch Now</button>
      </div>
    </div>
    
    
  )
}

export default Cards