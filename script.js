let database = [
    {
        "image_src": "img/tropy.png",
        "title": "Question One",
        "question": "What is 1+2*3?",
        "answer1": "7",
        "answer2": "9",
        "answer3": "42",
        "answer4": "I am not sure",
        "correctAnswer": 1
    },
    {
        "image_src": "img/tropy.png",
        "title": "Question Two",
        "question": "What is the capital of Sierra Leone?",
        "answer1": "Abidjan",
        "answer2": "Freetown",
        "answer3": "Zansibar",
        "answer4": "Monrovia",
        "correctAnswer": 2
    },
    {
        "image_src": "img/tropy.png",
        "title": "Question Three",
        "question": "Who invented the light bulp?",
        "answer1": "Thomas Eddison",
        "answer2": "Henry Ford",
        "answer3": "Albert Einstein",
        "answer4": "Nikolayev Tesla",
        "correctAnswer": 1
    },
];

let correctAnswers = 0;

//Elements by IDs
let image = document.getElementById('cardImage');
let title = document.getElementById('title');
let question = document.getElementById('question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');

//Only rendered once in the beginning with Question One
render(0);


function render(index) {
    if (index == 0) {
        hideButton('btnLast');
    } else {
        showButton('btnLast');
    }
    clearCard();
    image.src = database[index].image_src;
    title.innerHTML = database[index].title;
    question.innerHTML = database[index].question;
    answer1.innerHTML = database[index].answer1;
    answer2.innerHTML = database[index].answer2;
    answer3.innerHTML = database[index].answer3;
    answer4.innerHTML = database[index].answer4;
}


function clearCard() {
    title.innerHTML = '';
    question.innerHTML = '';
    answer1.innerHTML = '';
    answer2.innerHTML = '';
    answer3.innerHTML = '';
    answer4.innerHTML = '';
}


function showNextQuestion() {
    if (title.innerHTML == database[database.length-1].title) {
        clearCard();
        title.innerHTML = "Your Results";
        hideAnswers();
        hideButton('btnNext');
    } else {
        for (i = 0; i < database.length; i++) {
            if (title.innerHTML == database[i].title && i < database.length - 1) {
                render(i+1);
                break; //Breaks if rendered so that it does not continue with for-loop and overwrite...
            }
        }
    }  
}


function showLastQuestion() {
    if (title.innerHTML == database[0].title) {

    } else if (title.innerHTML == 'Your Results') {
        showAnswers();
        showButton('btnNext');
        render(database.length-1);
    } else {
        for (i = 0; i < database.length; i++) {
            if (title.innerHTML == database[i].title && i >= 0) {
                render(i-1);
                break; //Breaks if rendered so that it does not continue with for-loop and overwrite...
            }
        }
    }  
}


function hideAnswers() {
    answer1.classList.add('d-none');
    answer2.classList.add('d-none');
    answer3.classList.add('d-none');
    answer4.classList.add('d-none');
}


function showAnswers() {
    answer1.classList.remove('d-none');
    answer2.classList.remove('d-none');
    answer3.classList.remove('d-none');
    answer4.classList.remove('d-none');
}


function hideButton(id) {
    let btn = document.getElementById(`${id}`);
    btn.classList.add('d-none');
}


function showButton(id) {
    let btn = document.getElementById(`${id}`);
    btn.classList.remove('d-none');
}


function countCorrectAnswers(answer) {
    
}