import express from 'express'
import { renderToString } from 'react-dom/server'
import DisplayPostRequest from './functions/display-post-request'

const server = express()
server.use(express.json())

const port = 8080

server.get('/info', (_, response) => {
	response.json({
		port
	})
})

server.post('/display-post-request', (request, response) => {
	const html = renderToString(DisplayPostRequest(request.body))
	response.send(html)
})

server.listen(port, () => {
	console.log(`Running on port ${port}`)
})