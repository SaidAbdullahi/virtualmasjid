import axios from 'axios'
export default () => {

  return axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.VUE_APP_API_ENDPOINT,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
