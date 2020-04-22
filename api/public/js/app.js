const quizForm = document.querySelector('form');
const answer1 = document.querySelectorAll('input[name=question1]');
const answer2 = document.querySelectorAll('input[name=question2]');

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let module;
    let answer;

    answer1.forEach(ques => {
        if(ques.checked) {
            module = ques.value;
        }   
    });
    //var answer = answer2.value;

    answer2.forEach(ques => {
        if(ques.checked) {
            answer = ques.value;
        }
    });

    //console.log(module, answer);

    fetch('/', {
        method: 'post',
        headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'question1=' + module+ '&question2='+ answer
    }).then((response) => {
        //console.log(response.json());
        response.json().then((data) => {
            console.log(data);
        });
    }).catch(error => {
        console.log(error);
    }); 
});