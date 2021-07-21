import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.baseApiUrl}/api/v1/`,
})
