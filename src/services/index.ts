import Request from './baseRequest'
import { nanoid } from 'nanoid'
import cache from 'utils/cache'

const baseURL = 'https://qcq5h7.app.cloudendpoint.cn/'

const uuid = cache.getCache('__uuid__')
if (!uuid) {
  cache.setCache('__uuid__', nanoid())
}

const _Request = new Request({
  baseURL,
  timeout: 10000,
  headers: {
    'x-tt-session-v2': uuid
  }
})

export default _Request
