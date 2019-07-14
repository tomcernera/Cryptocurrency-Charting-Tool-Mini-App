import React from 'react'

var News = props => (
  <ul>
    {props.news.map((title,i) => {
      return <a href={title.url} target="_blank" ><li key={i}>{title.title}</li><img src={title.urlToImage} height="100" width="100"></img></a>
    })}
  </ul>
)

export default News