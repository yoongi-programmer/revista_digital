function mostrarInfo() {
    const infoBox = document.getElementById("infoBox");
    infoBox.style.display = "block"; // Muestra el cuadro de información

    // Hace que desaparezca después de 5 segundos
    setTimeout(() => {
        cerrarInfo();
    }, 5000); // 5000 ms = 5 segundos
}

function cerrarInfo() {
    const infoBox = document.getElementById("infoBox");
    // Añadir animación de salida
    infoBox.style.animation = "fadeOut 0.5s ease";
    setTimeout(() => {
        infoBox.style.display = "none"; // Oculta el cuadro después de la animación
        infoBox.style.animation = ""; // Restablece la animación
    }, 500); // 500 ms = duración de la animación de fadeOut
}
