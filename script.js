document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');

    menuIcon.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.image-thumbnails img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Pega o caminho da imagem grande do atributo 'data-src'
            const newImageSrc = this.getAttribute('data-src');
            
            // Troca o 'src' da imagem principal
            mainImage.src = newImageSrc;
        });
    });
});