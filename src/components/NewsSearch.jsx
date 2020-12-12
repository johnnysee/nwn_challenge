import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Button } from 'semantic-ui-react'

const NewsSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  useEffect(() => NewsService.index(dispatch), [])

  return (
    <Input
      action = {<Button
        type='submit'
        onClick={()=> NewsService.search(query, dispatch)}
        >Search</Button>}
      data-cy="search-input"
      onChange={(event, data)=> setQuery(data.value)}
      placeholder='Search...' >
    </Input>
  )
}

export default NewsSearch
