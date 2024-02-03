import React from 'react'

const NewsItem=(props)=> {

  let {title,description,imgUrl,newsUrl,author,date,source} =props;
  return (
    <div>
      <div className="card my-3">
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>

        
      <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
<img src={!imgUrl?"https://images.indianexpress.com/2023/10/V-K-Pandian-1.jpg?w=640":imgUrl} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <p className="card-text">{description}</p>
  <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toUTCString()}</small></p>
  <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read More</a>
</div>
</div>
    </div>
  )
}

export default NewsItem
