let currentLanguage = 'fr'; // Langue initiale
let isDarkMode = false; // État du mode sombre

const toggleDarkMode = () => {
    isDarkMode = !isDarkMode; // Inverser l'état du mode sombre
    document.body.classList.toggle('dark-mode', isDarkMode); // Ajouter ou retirer la classe dark-mode

    const darkModeButton = document.getElementById('toggle-dark-mode');
    darkModeButton.innerText = isDarkMode ? 'Mode Clair' : 'Mode Sombre'; // Mettre à jour le texte du bouton
};

// Événements pour vérifier les réponses
document.getElementById('check-answers').addEventListener('click', () => {
    const result = document.getElementById('result');
    const answers = {
        q1: 'b', // Réponse correcte pour la question 1
        q2: 'b'  // Réponse correcte pour la question 2
    };
    let score = 0;

    // Vérifier les réponses
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');

    if (q1Answer && q1Answer.value === answers.q1) {
        score++;
    }
    if (q2Answer && q2Answer.value === answers.q2) {
        score++;
    }

    // Afficher le résultat
    result.innerText = `Vous avez obtenu ${score} sur 2.`;
});

// Événement pour réinitialiser le quiz
document.getElementById('reset-quiz').addEventListener('click', () => {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').innerText = '';
});

// Événement pour le mode sombre
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);