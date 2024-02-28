let counter=0;

const decrease=document.querySelector('.decrease');
const increase=document.querySelector('.increase');
const reset=document.querySelector('.reset');
const displayNum=document.getElementById('value');

increase.addEventListener('click',()=>{
    counter++;
    displayNum.textContent=counter;
    setColor();
})

decrease.addEventListener('click',()=>{
    counter--;
    displayNum.textContent=counter;
    setColor();
})

reset.addEventListener('click',()=>{
    counter=0;
    displayNum.textContent=counter;
    setColor();
})

const setColor=()=>{
    if(counter<0)
    displayNum.style.color='red';
    else if(counter>0)
    displayNum.style.color='green'
    else
    displayNum.style.color='black'
}