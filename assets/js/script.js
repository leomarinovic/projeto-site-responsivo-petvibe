// Carregar o header do site
fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // --- LÓGICA DO MENU MOBILE E OVERLAY ---
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const sidenav = document.getElementById('my-sidenav');
        const closeBtn = document.getElementById('close-btn');
        const overlay = document.getElementById('overlay'); // Pega o elemento de overlay

        // Função para fechar o menu
        function closeMenu() {
            sidenav.style.width = '0';
            overlay.style.display = 'none'; // Esconde o overlay
        }

        // Abre o menu quando o ícone de hambúrguer é clicado
        hamburgerIcon.addEventListener('click', () => {
            sidenav.style.width = '250px';
            overlay.style.display = 'block'; // Mostra o overlay
        });

        // Fecha o menu quando o botão 'x' é clicado
        closeBtn.addEventListener('click', closeMenu);

        // Fecha o menu quando o overlay é clicado
        overlay.addEventListener('click', closeMenu);
    });


// Carregar o footer
fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });