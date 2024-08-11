document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    
    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(quizForm);
            const answers = {
                q1: 'Gather your ingredients',
                q2: 'Sourdough starter'
            };
            let score = 0;
            
            formData.forEach((value, key) => {
                if (answers[key] === value) {
                    score++;
                }
            });
            
            resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
        });
    }
});
