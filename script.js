document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur est sur la page d'accueil
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        alert("Bienvenue sur le site de la Culture Espagnole !");
    }

    // Fonctionnalité de la modale
    function openModal(content) {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '5px';
        modalContent.innerHTML = content;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Fermer';
        closeButton.style.marginTop = '10px';
        closeButton.onclick = () => {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        };

        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    // Exemple d'utilisation de la modale
    const exampleButton = document.querySelector('#exampleButton');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            openModal('Voici un contenu de modale informatif !');
        });
    }

    // Gestion du mode sombre
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (toggleButton) { // Vérifie si le bouton existe avant d'ajouter l'événement
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            const nav = document.querySelector('nav');

            header.classList.toggle('dark-mode');
            footer.classList.toggle('dark-mode');
            nav.classList.toggle('dark-mode');
            nav.querySelectorAll('a').forEach(link => {
                link.classList.toggle('dark-mode');
            });

            // Sauvegarder l'état du mode sombre dans le stockage local
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode);
        });
    }

    // Récupérer l'état du mode sombre au chargement de la page
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');

        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const nav = document.querySelector('nav');

        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        nav.querySelectorAll('a').forEach(link => {
            link.classList.add('dark-mode');
        });
    }

    // Appliquer le mode sombre à loading.html si nécessaire
    if (window.location.pathname === '/loading.html') {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }
});
