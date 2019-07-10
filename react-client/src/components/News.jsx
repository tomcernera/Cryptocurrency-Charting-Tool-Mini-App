import React from 'react'

var News = props => (
  <ul>
    {props.news.map(title => {
      return <li key={title.date}>{title.title}</li>
    })}
  </ul>
)

export default News