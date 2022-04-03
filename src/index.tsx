import express from 'express'

const server = express()
const port = 8080

server.get('/info', (_, response) => {
	response.json({
		port
	})
})

server.listen(port, () => {
	console.log(`Running on port ${port}`)
})