import axios from 'axios'


const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
const NewsService = {
  async index() {
    let result = await axios.get(apiUrl + "/top-headlines", { params: { apiKey: apiKey, country: 'se' } })
    return result.data.articles
  },

  async search(query) {

  }
}

export default NewsService