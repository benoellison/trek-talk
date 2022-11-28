import { getAllByAltText } from '@testing-library/react'
import sendRequest from './send-request'
const BASE_URL = '/api/movies'

export function getAll() {
    return sendRequest(`${BASE_URL}`)
}