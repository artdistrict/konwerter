const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let celsius;
let farenheit;
//T(°F) = T(°C) * 1.8 + 32
//T(°C) = (T(°F) - 32) /1.8

const change = () => {
    if(one.textContent.includes('°C') && two.textContent.includes('°F')){
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    }else if (one.textContent.includes('°F') && two.textContent.includes('°C')){
    one.textContent = '°C';
    two.textContent = '°F';
    result.textContent = '';
    }
}

const changeFtoCel = () => {
    farenheit = (converter.value * 1.8) + 32;
    result.textContent = `${converter.value} °C' to ${farenheit.toFixed(1)} °F `
    converter.value = '';
}

const changeCtoFahr = () => {
    celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value} °F' to ${celsius.toFixed(1)} °C `
    converter.value = '';
    }

 const conversion = () => {
    if(converter.value !== ''){
   if(one.textContent === '°C'){
    changeFtoCel();
   }else{
    changeCtoFahr();
   }
    }else{
        result.textContent = 'Musisz podac jakas wartosc';
    }
 }  
    
const reset = () =>{
    converter.value = '';
    result.textContent = '';
}

changeBtn.addEventListener('click', change);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);