import sendRequest from './send-request'
const BASE_URL = '/api/series'

export function getAll() {
    return sendRequest(`${BASE_URL}`)
}