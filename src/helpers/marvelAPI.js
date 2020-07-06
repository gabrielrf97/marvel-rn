import axios from 'axios'
import md5 from 'js-md5'

const PUBLIC_KEY = '92054aba8005e42d62aed24eee96198b'
const PRIVATE_KEY = 'ae2000662c4b8c79870452c542c63dd907bb81a7'
const LIMIT = 20

const timestamp = "123123123123123123123123"
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

const server = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})

export async function fetchCharacters(name, fetchedPages) {
    let offset = fetchedPages * LIMIT
    let params = {
        limit: LIMIT,
        offset: offset,
        ts: timestamp,
        hash: hash.hex(),
        apikey: PUBLIC_KEY
    }
    if (name) {
        params.name = name
    }
    console.log(`OFFSET: ${offset}, fetchedPages: ${fetchedPages}`)
    let response = await server.get('/characters', {
        params: params
    })
    return response.data.data.results
}

