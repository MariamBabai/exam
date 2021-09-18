let questions = [
    {
        text: 'The best city in Ukraine', // вопрос
        right: 'Kharkiv',
    },
    {
        text: 'First font was',
        right: 'Helvetica',
    },
    {
        text: 'Framework begins with R?',
        right: 'React',
    },
];
let test = document.querySelector('#test');
for (let question of questions) {
    let div = document.createElement('div');
    test.appendChild(div);

    let p = document.createElement('p');
    p.innerHTML = question.text;
    div.appendChild(p);

    let input = document.createElement('input');
    input.dataset.right = question.right;
    div.appendChild(input);
}


let button = document.querySelector('#button');
button.addEventListener('click', function() {
    let inputs = document.querySelectorAll('#test input');

    for (let input of inputs) {
        input.classList.remove('correct'); // удаление класса
        input.classList.remove('incorrect'); // удаление класса

        if (input.value == input.dataset.right) {
            input.classList.add('correct');


        } else {
            input.classList.add('incorrect');
        }

    }

});

