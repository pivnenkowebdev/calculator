// 1. создать переменную для хранения первого числа
// 2. создать переменную для хранения второго числа
// 3. создать переменную для хранения результата 
// 4. найти элемент в который будет рендериться результат
// 5. отследить клик на плюсе и запустить функцию сложения
// 6. написать оставшиеся три функции с другими кнопками (вычитание, деление, умножение)
// 7. написать функцию для очистки формы


const actionBtn = document.querySelectorAll('[data-action]');
const holderAnswer = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
let num1;
let num2;
let result;

actionBtn.forEach((item)=>{
   
   item.addEventListener('click',(e)=>{
      holderAnswer.textContent = '';
      num1 = document.querySelector('#num1').value;
      num2 = document.querySelector('#num2').value;

      switch(e.target.dataset.action){

         case 'plus':
            doPlus();
            renderResult();
            break;
            
            case 'minus':
            doMinus();
            renderResult();
            break;
            
            case 'division':
            doDivision();
            renderResult();
            break;
            
            case 'multiplication':
            doMultiplication();
            renderResult();
            break;

            default:
               console.log('no');

      }
      
   })
   
})

function doPlus(){
   result = +num1 + +num2;
} 

function doMinus(){
   result = num1 - num2;
}

function doDivision(){
   result = num1 / num2;
}

function doMultiplication(){
   result = num1 * num2;
}

function renderResult(){
   holderAnswer.textContent = result;
}

resetBtn.addEventListener('click',()=>{
   holderAnswer.textContent = '';
})