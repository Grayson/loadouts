import express from 'express'
import dotenv from 'dotenv'
import { renderToString } from 'react-dom/server'
import DisplayPostRequest from './functions/display-post-request'

const server = express()
server.use(express.json())

const dotenvResult = dotenv.config()
if (!!dotenvResult.error) {
	throw dotenvResult.error
}

const port = process.env.PORT || 8080
const environment = process.env.ENVIRONMENT || 'dev'
const buildInfo = process.env.BUILD_INFO || `Started ${Date.now().toLocaleString()}`

server.get('/info', (_, response) => {
	response.json({
		buildInfo,
		environment,
		port,
	})
})

server.post('/display-post-request', (request, response) => {
	const html = renderToString(DisplayPostRequest(request.body))
	response.send(html)
})

server.listen(port, () => {
	console.log(`Running on port ${port}`)
})