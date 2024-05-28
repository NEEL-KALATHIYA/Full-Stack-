let options = document.querySelectorAll('.option');
let attemptedCount = document.getElementById('attemptedCount');
let correctCount = document.getElementById('correctCount');
let wrongCount = document.getElementById('wrongCount');
let percentage = document.getElementById('percentage');

let totalQuestions = 0;
let correctAnswers = 0;
let attemptedQuestions = new Set();

options.forEach(option => {
option.addEventListener('click', () => {
let questionId = option.getAttribute('data-question');
let isCorrect = option.getAttribute('data-correct') === 'true';

if (!attemptedQuestions.has(questionId)) {
    options.forEach(o => {
        if (o.getAttribute('data-question') === questionId) {
            o.classList.remove('selected', 'correct', 'wrong');
            if (o === option) {
                o.classList.add('selected');
                if (isCorrect) {
                    o.classList.add('correct');
                    correctAnswers++;
                } else {
                    o.classList.add('wrong');
                    options.forEach(correctOption => {
                        if (
                            correctOption.getAttribute('data-question') === questionId &&
                            correctOption.getAttribute('data-correct') === 'true'
                        ) {
                            correctOption.classList.add('correct');
                        }
                    });
                }
                totalQuestions++;
                attemptedQuestions.add(questionId); 
            }
        }
    });
}


});
});