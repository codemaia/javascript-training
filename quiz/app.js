const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');
const finalScoreContainer = document.querySelector('.final-score-container');

let score = 0;

form.addEventListener('submit', event => {

    event.preventDefault();

    //respostas do usuario
    const userAnswers = correctAnswers.map((_, index) => {
        return form[`inputQuestion${index + 1}`].value;
    })

    


    //reset score
    if (score !== 0) {
        score = 0;
    }


    //subir a pagina para o topo suavemente
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });


    //score do usuario
    userAnswers.forEach((answer, index) => {
        
        if (answer === correctAnswers[index]) {
            score += 25;
        }

    });
    


    //show score
    finalScoreContainer.querySelector('span').textContent = `${score}%`
   

});