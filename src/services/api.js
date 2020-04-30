import axios from 'axios'

export default () =>
  axios.create({
    baseURL: 'https://virtualmasjid.herokuapp.com/api/v1',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
