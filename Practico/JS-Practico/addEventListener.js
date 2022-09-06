const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#bntCalcular')
const p = document.querySelector('#result')

btn.addEventListener('click',btnOnClick);

function btnOnClick()
{
   const sumaInputs = (+input1.value + +input2.value);
   p.innerText = "Resultado: " + sumaInputs;
}
