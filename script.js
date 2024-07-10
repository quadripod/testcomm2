const choices = {
    0: 'innovant',
    1: 'des résultats tangibles'
};

function replaceWord(id, word) {
    const element = document.querySelector(`[data-id='${id}']`);
    element.textContent = word;
    element.style.color = 'green';
    element.style.fontWeight = 'normal';
    element.style.cursor = 'default';
    element.removeEventListener('click', replaceWord);
    document.getElementById(`choice-${id}`).style.display = 'none';

    checkCompletion();
}

function checkCompletion() {
    const remainingVagueWords = document.querySelectorAll('.vague');
    if (remainingVagueWords.length === 0) {
        document.getElementById('feedback').textContent = 'Bien joué ! Vous avez remplacé tous les mots vagues par des termes plus précis.';
    }
}
