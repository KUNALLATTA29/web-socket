const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })
})

server.listen(3000,()=>{
    console.log('server is running at 3000')
})