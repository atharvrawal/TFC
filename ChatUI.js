document.getElementById('send-btn').addEventListener('click', function() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('chat-message', 'user-message');
        chatBox.appendChild(messageElement);
        
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});