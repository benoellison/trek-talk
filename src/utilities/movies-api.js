// import { getAllByAltText } from '@testing-library/react'
import sendRequest from './send-request'
const BASE_URL = '/api/movies'

export function getAll() {
    return sendRequest(`${BASE_URL}`)
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addComment(id, content) {
    console.log(id)
    console.log(content)
    return sendRequest(`${BASE_URL}/${id}/comments`, 'POST', ({content}))
}