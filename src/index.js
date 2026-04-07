const MAIN=document.getElementById('MAIN');
const input=document.getElementById('Input_number');
const buttonConfirm=document.getElementById('confirm_button');
const content=document.getElementById('content');

const notas=[100,50,20,10,5,2,1,0.50,0.25,0.10,0.05,0.01]
function setShow(){
    if(MAIN.id!=="MAIN_show"){
        MAIN.id=MAIN.id+'_show';
    }
}
function criarLista(nota,quantidade){
    content.innerHTML=content.innerHTML+String(
        `<li class> R$${nota.toFixed(2)}: ${quantidade}</li>\n`
    )
}
function apagarLista(){
    content.innerHTML=''
}
function calculator(){
    apagarLista()
    let value= input.value;
    let numValue=parseFloat(value);
    setShow();
    for(let i = 0;i<notas.length;i++){
        let resto=numValue%notas[i];
        let resultado=(numValue-resto)/notas[i];
        numValue=resto;
        criarLista(notas[i],resultado)
    }
}

buttonConfirm.addEventListener('click',()=>{
    calculator()
})