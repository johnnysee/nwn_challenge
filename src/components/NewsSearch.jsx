import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input } from 'semantic-ui-react'


const NewsSearch = () => {
  const dispatch = useDispatch()
  const fetchNewsArticles = async () => {
    let results = await NewsService.index()
    dispatch({type: "SET_NEWS_FEED", payload: results})
  }
  useEffect(() => fetchNewsArticles(), [])

  return (
    <Input action='Search' placeholder='Search...' />
  )
}

export default NewsSearch
