let dataTitle = document.querySelector('#title1');
const enteredDataTitle = document.querySelector('#title');
let dataDate = document.querySelector('#date1');
const enteredDataDate = document.querySelector('#date');
let dataAmount = document.querySelector('#amount1');
const enteredDataAmount = document.querySelector('#amount');

let myElement = document.querySelector('#row1');
const tdTitle = document.createElement('td');
const tdDate = document.createElement('td');
const tdAmount = document.createElement('td');

const button = document.querySelector('button');

button.addEventListener('click', pressButton);

function pressButton(){
  dataTitle.innerHTML = enteredDataTitle.value;
  dataDate.innerHTML = enteredDataDate.value;
  tdTitle.append(enteredDataAmount.value);
  row1.append(tdTitle, tdTitle, tdAmount);
}

console.log(enteredDataTitle);
