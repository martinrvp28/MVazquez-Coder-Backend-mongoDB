const socket = io();

let username = null;

if (!username) {
    
    Swal.fire({
        title: 'Bienvenido al chat',
        text: 'Inserte su mail',
        input: 'text',
        inputValidator: (value) => {
            if (!value) return 'Por favor ingresa un mail'
        }
    })
    .then((input) => {
        username = input.value;
        socket.emit('newUser', username);
    })
}

const message = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const actions = document.getElementById('actions');

btn.addEventListener('click', () =>{
    socket.emit('chat:message',{
        username,
        message: message.value
    })
    message.value = '';
})

socket.on('message', (arrayMsgs) =>{
    const chatRender = arrayMsgs.map((msg) => {
        return `<p><strong>${msg.user}</strong> : ${msg.message}</p>`
    }).join(' ')
    output.innerHTML = chatRender;
})