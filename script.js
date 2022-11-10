let database = [
    {
        "image_src": "img/tropy.png",
        "title": "Question One",
        "question": "What is 1+2*3?",
        "answer1": "7",
        "answer2": "9",
        "answer3": "42",
        "answer4": "I am not sure",
        "correctAnswer": 1,
        "answerGiven": false
    },
    {
        "image_src": "img/tropy.png",
        "title": "Question Two",
        "question": "What is the capital of Sierra Leone?",
        "answer1": "Abidjan",
        "answer2": "Freetown",
        "answer3": "Zansibar",
        "answer4": "Monrovia",
        "correctAnswer": 2,
        "answerGiven": false
    },
    {
        "image_src": "img/tropy.png",
        "title": "Question Three",
        "question": "Who invented the light bulp?",
        "answer1": "Thomas Eddison",
        "answer2": "Henry Ford",
        "answer3": "Albert Einstein",
        "answer4": "Nikolayev Tesla",
        "correctAnswer": 1,
        "answerGiven": false
    },
];

let correctAnswers = 0;

//Elements by IDs
let image = document.getElementById('cardImage');
let title = document.getElementById('title');
let question = document.getElementById('question');
let listGroup = document.getElementById('listGroup');

//Only rendered once in the beginning with Question One
render(0);


function render(index) {
    clearCard();
    showButton('btnNext');
    hideButton('btnRestart'); 
    restartCounter(index);
    showAnswers();
    if (index < database.length) {
        image.src = database[index].image_src;
        title.innerHTML = database[index].title;
        question.innerHTML = database[index].question;
        createHtmlTemplate(index);
        createAnswers(index);
    }
}


function createHtmlTemplate(index) {
    for (i = 1; i < 5; i++) {
        listGroup.innerHTML += `
            <button onclick="countCorrectAnswers(${index},${i})" id="answer${i}" type="button" class="list-group-item list-group-item-action"></button>
        `;
    }
}


function createAnswers(index) {
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');
    answer1.innerHTML = database[index].answer1;
    answer2.innerHTML = database[index].answer2;
    answer3.innerHTML = database[index].answer3;
    answer4.innerHTML = database[index].answer4;
}


function clearCard() {
    title.innerHTML = '';
    question.innerHTML = '';
    listGroup.innerHTML = '';
}


function showNextQuestion() {
    if (title.innerHTML == database[database.length-1].title) {
        clearCard();
        title.innerHTML = `Your Results: ${correctAnswers}/${database.length}!`;
        hideAnswers();
        hideButton('btnNext');
        showButton('btnRestart');
    } else {
        for (i = 0; i < database.length; i++) {
            if (title.innerHTML == database[i].title && i < database.length - 1) {
                render(i+1);
                break; //Breaks if rendered so that it does not continue with for-loop and overwrite...
            }
        }
    }  
}


function hideAnswers() {
    listGroup.classList.add('d-none');
}


function showAnswers() {
    listGroup.classList.remove('d-none');
}


function hideButton(id) {
    let btn = document.getElementById(`${id}`);
    btn.classList.add('d-none');
}


function showButton(id) {
    let btn = document.getElementById(`${id}`);
    btn.classList.remove('d-none');
}


function countCorrectAnswers(index, i) {
    let button = document.getElementById(`answer${i}`);
    if (database[index].correctAnswer == i && database[index].answerGiven == false) {
        database[index].answerGiven = true;
        correctAnswers +=1;
        giveFeedback(button.innerHTML, "correct");
    } else {
        giveFeedback(button.innerHTML, "incorrect");
    }
}


function restartCounter(index) {
    //Restart only when index = 0 shall be rendered.
    if (index == 0) {
        correctAnswers = 0; //correctAnswer Counter must be resetted
        for (i = 0; i < database.length; i++) {
            database[i].answerGiven = false; //The answerGiven Boolean must be resetted
        }
    }
}


function giveFeedback(givenAnswer, response) {
    listGroup.innerHTML = '';
        if (response == "correct") {
            listGroup.innerHTML = `
                <button class="list-group-item list-group-item-action bg-success">${givenAnswer + ` is ` + response}</button>
            `;
        } else {
            listGroup.innerHTML = `
                <button class="list-group-item list-group-item-action bg-danger">${givenAnswer + ` is ` + response}</button>
            `;
        }   
}