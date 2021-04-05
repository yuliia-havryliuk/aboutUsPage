/*
const btnRef = document.getElementById('btn');
btnRef.addEventListener('click'=>{

})*/
const openModalWindowRef = document.querySelector('.btn')
const closeModalWindowRef = document.querySelector('.btn[data-action="close-modal"]')

function handelSecondModalWindowShow(){
    document.body.classList.add('show__modal')
    document.body.classList.add('show__button')
    document.body.classList.remove('show__span')
}
function handelSecondModalWindowHide(){
    document.body.classList.remove('show__modal')
}


openModalWindowRef.addEventListener('click', ()=>{
    handelSecondModalWindowShow()
})
closeModalWindowRef.addEventListener('click', ()=>{
    handelSecondModalWindowHide()
})
