import axios from 'axios'
import md5 from 'js-md5'

const PUBLIC_KEY = '92054aba8005e42d62aed24eee96198b'
const PRIVATE_KEY = 'ae2000662c4b8c79870452c542c63dd907bb81a7'
const LIMIT = 20
const TIMESTAMP = "123123123123123123123123"
const HASH = md5.create().update(TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY)
const PARAMS = {
    limit: LIMIT,
    ts: TIMESTAMP,
    hash: HASH.hex(),
    apikey: PUBLIC_KEY
}

const server = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})

export async function fetchSingleItem(type, id) {
    let params = PARAMS

    let response = await server.get(`/${type}/${id}`, {
        params: params
    })

    return response.data.data.results[0]
}

export async function fetchList(route, name, fetchedPages) {
    let params = PARAMS
    
    let offset = fetchedPages * LIMIT
    params.offset = offset

    name ? params.name = name : null

    let response = await server.get(route, {
        params: params
    })
    return response.data.data.results
}