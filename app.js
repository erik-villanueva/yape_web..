document.getElementById('enviar-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const monto = document.getElementById('monto').value;
    const historialLista = document.getElementById('historial-lista');
    
    // Agregar la transacción al historial
    const li = document.createElement('li');
    li.textContent = `Se envió S/.${monto}`;
    historialLista.appendChild(li);
    
    // Limpiar el campo de entrada
    document.getElementById('monto').value = '';
});
