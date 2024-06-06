const btnleft = document.querySelector(".btn-left"),
        btnright=document.querySelector(".btn-right"),
        slider=document.querySelector("#slider"),
        sliderSection=document.querySelectorAll(".slider-section");

    

btnright.addEventListener("click", e => MoveRight())
btnleft.addEventListener("click", e => MoveLeft())
let contador=0;

function MoveRight(){
    slider.style.transform= "translate(-33.3%)"

}

function MoveLeft (){
    slider.style.transform = "translate(0%)"

}