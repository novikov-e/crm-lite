const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
const {Server} = require('socket.io')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({dev, hostname, port})
const handler = app.getRequestHandler()

app.prepare().then(() => {
	const httpServer = createServer(handler)
	const io = new Server(httpServer)
	io.on('connection', (socket: { on: (arg0: string, arg1: (message: any) => void) => void }) => {
		console.log('connection');
        socket.on('hello', message => {
					console.log('hello')
					console.log(message)
				})
    })

	httpServer
		.once('error', (err: any) => {
			console.error(err)
			process.exit(1)
		})
		.listen(port, () => {
			console.log(`> Ready on http://${hostname}:${port}`)
		})
})
