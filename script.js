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

//-----------------------VIDEO BACKGROUND--------------------
document.querySelectorAll('.video-background').forEach(videoContainer => {
    const videos = videoContainer.querySelectorAll('.video');
    let currentVideo = 0;

    // Función para cambiar al siguiente video
    function showNextVideo() {
        videos[currentVideo].classList.remove('active');
        currentVideo = (currentVideo + 1) % videos.length; // Ciclo de videos
        videos[currentVideo].classList.add('active');
    }

    // Inicia el primer video como activo
    videos[currentVideo].classList.add('active');

    // Cambia el video cada 5 segundos (ajusta el tiempo si es necesario)
    setInterval(showNextVideo, 5000);
});

