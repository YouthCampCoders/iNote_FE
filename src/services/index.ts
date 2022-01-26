import Request from './baseRequest'

const _Request = new Request({
  baseURL: 'localhost:3000',
  timeout: 1000
})

export default _Request
