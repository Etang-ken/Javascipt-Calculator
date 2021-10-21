const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const button8 = document.querySelector('.button8');
const button9 = document.querySelector('.button9');
const button0 = document.querySelector('.button0');
const buttonpoint = document.querySelector('.buttonpoint');

const calScreen = document.querySelector('.calculatorScreen');
const screen = document.querySelector('.seccond');
// const firstNum = document.getElementsByClassName('first-num');
// const secondNum = document.getElementsByClassName('second-num');
// const thirdNum = document.getElementsByClassName('third-num');


const plusSign = document.querySelector('.plusSign');
const minusSign = document.querySelector('.minusSign');
const divideSign = document.querySelector('.divideSign');
const multiplySign = document.querySelector('.multiplySign');
const equal = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

const arrayButtons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttonpoint];
const signs = [plusSign, minusSign, multiplySign, divideSign];

arrayButtons.forEach(button => {
    const number1 = button.addEventListener('click', () => {
        screen.textContent += button.innerText;
    })
});

signs.forEach(sign => {
    const operator = sign.addEventListener('click', () => {
        screen.textContent += ' ' + sign.innerText + ' ';
    })
});


equal.addEventListener('click', () => {
    const answer = eval(screen.textContent);
    screen.innerHTML += ` <br><br>` + answer;
});

clearButton.addEventListener('click', () => {
    screen.textContent = '';
})
