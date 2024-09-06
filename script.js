
const quizdata = [
    {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
},
{
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
},
{
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
    answer: 'William Shakespeare'
},
{
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O'
},
{
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['Japan', 'China', 'South Korea', 'Thailand'],
    answer: 'Japan'
},
{
    question: 'What is the largest mammal?',
    options: ['Blue whale', 'Elephant', 'Giraffe', 'Hippo'],
    answer: 'Blue whale'
},
{
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    answer: 'Leonardo da Vinci'
},
{
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    answer: 'Mount Everest'
},
{
    question: 'What is the smallest planet in the solar system?',
    options: ['Mercury', 'Mars', 'Pluto', 'Earth'],
    answer: 'Mercury'
},
{
    question: 'Which bird is known for its ability to mimic human speech?',
    options: ['Parrot', 'Eagle', 'Owl', 'Penguin'],
    answer: 'Parrot'
}

    ];

    let currentquestion = 0;
    let marks = 0;
    let timeleft=220;
    const timer=document.getElementById('time');
    const timeinterval=setInterval(function(){
        timeleft--;
        timer.textContent=timeleft;

        if (timeleft<=0){
            clearInterval(timeinterval);
            alert('time is over');
        }
    },1000);

    const lenght = quizdata.length;
    // console.log(lenght);

    // console.log(quizdata.length);
    function loadquestion() {
        const question_conatiner = document.getElementById('question_conatiner');
        const option_container = document.getElementById('option_container');
        const number = document.getElementById('number');

        question_conatiner.innerHTML = quizdata[currentquestion].question;

        option_container.innerHTML = '';
        quizdata[currentquestion].options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.addEventListener('click', () => {
                button.style.backgroundColor = 'rgb(63, 197, 241)';
                button.style.color = 'white';
            })
            button.addEventListener('click', () => selectanswer(option));
            option_container.appendChild(button);
        })

        number.innerHTML = `${[currentquestion+1]} / ${lenght}`;

       
    }

    function selectanswer(selectedoption) {
        const answer = quizdata[currentquestion].answer;

        if (selectedoption === answer) {

            display.innerHTML = selectedoption + ': <h4>your answer is correct</h4>';
            marks++
            const mark = document.getElementById('marks').innerHTML= `${marks} / 10`;
        } else {

            display.innerHTML = selectedoption + ':<h4> answer is wrong </h4> <br> The correct Answer is :' + answer;
           
        }
        const answerButtons = document.querySelectorAll('#option_container button');
answerButtons.forEach(button => {
    button.disabled = true;
});

        currentquestion++;
    }

    const click = document.getElementById('click');
    click.addEventListener('mouseover', () => {
        click.style.backgroundColor = 'rgb(63, 197, 241)';
        click.style.color = 'white';
    })

    click.addEventListener('mouseout', () => {
        click.style.backgroundColor = 'white';
        click.style.color = 'rgb(63, 197, 241)';
    })

    function nextquestion() {

       
        display.innerHTML = '';
        if (currentquestion < quizdata.length) {
            loadquestion();
        } else {
            submitanswer();
        }
    }

    function submitanswer() {
        const printscore = document.getElementById('result');
        printscore.innerhtml=`<h4> your total marks is ${score} out of 10 </h4>`;

        // alert('your total marks is = ', score);
    }

    loadquestion();
