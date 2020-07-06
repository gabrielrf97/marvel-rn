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

export async function fetchCharacter(id) {
    let params = PARAMS

    console.log(`CALLING WITH ID: ${id}`)

    let response = await server.get(`/characters/${id}`, {
        params: params
    })

    return response.data.data.results[0]
}

export async function fetchSerie(id) {
    let params = PARAMS

    console.log(`CALLING WITH ID: ${id}`)

    let response = await server.get(`/series/${id}`, {
        params: params
    })

    console.log(`FETCHED SERIE: ${response.data.data.results[0]}`)

    return response.data.data.results[0]
}

export async function fetchComic(id) {
    let params = PARAMS

    console.log(`CALLING WITH ID: ${id}`)

    let response = await server.get(`/comics/${id}`, {
        params: params
    })

    console.log(`FETCHED COMIC: ${response.data.data.results[0]}`)

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