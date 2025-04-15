function sendWhats(event) {
    event.preventDefault();   // evita com que a tela recarregue

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const text = `Olá! Me chamo ${name}. ${message}`;
    const msgFormated = encodeURIComponent(text);
    
    const url = `https://wa.me/5511984393259/?text=${msgFormated}`;
    
    window.open(url, '_blank');
}