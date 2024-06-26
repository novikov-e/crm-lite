'use client'

import {useEffect, useState} from 'react'
import {socket} from '../_utils/socket'

export default function Home() {
	const [isConnected, setIsConnected] = useState(false)
	const [transport, setTransport] = useState('N/A')
    const [message, setMessage] = useState('')


	const sendMessage = () => {
		console.log('sendMessage')
        console.log(message)
        
        socket.emit('hello', message)
    }
    
    const recieveMessage = (message: string) => {
        console.log('recieveMessage')
        console.log(message);
    }

	useEffect(() => {
		if (socket.connected) {
			onConnect()
		}

		function onConnect() {
			setIsConnected(true)
			setTransport(socket.io.engine.transport.name)

			socket.io.engine.on('upgrade', transport => {
				setTransport(transport.name)
			})
		}

		function onDisconnect() {
			setIsConnected(false)
			setTransport('N/A')
		}

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)
		socket.on('hello', recieveMessage)
		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
		}
	}, [])

	return (
		<div>
			<p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
            <p>Transport: {transport}</p>
            <input id='message' name='message' value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
		</div>
	)
}
