import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import { Card } from 'semantic-ui-react'


const NewsIndex = () => {
  let newsFeed = useSelector(state => state.newsFeed)
  return (
    <Card.Group data-cy="news-section">
      {newsFeed && newsFeed.map(newsFeedItem => <NewsCard item={newsFeedItem} key={newsFeed.indexOf(newsFeedItem)} />)}
    </Card.Group>
  )
}

export default NewsIndex
