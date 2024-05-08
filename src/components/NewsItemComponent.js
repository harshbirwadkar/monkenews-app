import React, { Component } from 'react'

const NewsItemComponent =(props)=> {
    let { title, description, imageUrl, newsUrl , author, date , source} = props
    return (
      <div className="card" >
        <img src={imageUrl ? imageUrl : " https://euaa.europa.eu/sites/default/files/styles/width_600px/public/default_images/news-default-big.png?itok=NNXAZZTc"} className="card-img-top" alt="..." width={"415px"} height={"230"} />
        <div className="card-body">
          <span className="badge text-bg-warning" style={{fontSize : "1rem", marginBottom : "0.5rem"}}>{source}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} , published on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
        </div>
      </div>
    )
}

export default NewsItemComponent