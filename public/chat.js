// make connection
const socket = io.connect('http://localhost:4000')

// dom query
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')
const handle = document.getElementById('handle')
const message = document.getElementById('message')
const btn = document.getElementById('send')

// handle event
btn.addEventListener('click', () => {
  socket.emit('chat', {
    handle: handle.value,
    message: message.value
  })
})

message.addEventListener('keypress', () => {
  socket.emit('typing', {
    handle: handle.value,
    message: 'is typing  a message...'
  })
})

// listen for event
socket.on('chat', (data) => {
  feedback.innerHTML = ''
  output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`
})

socket.on('typing', (data) => {
  feedback.innerHTML = `<p><em>${data.handle} ${data.message}</em></p>`
})
