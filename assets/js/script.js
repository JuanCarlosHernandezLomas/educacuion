const btnleft = document.querySelector(".btn-left"),
        btnright=document.querySelector(".btn-right"),
        slider=document.querySelector("#slider"),
        sliderSection=document.querySelectorAll(".slider-section");
        

btnright.addEventListener("click", e => MoveRight())
btnleft.addEventListener("click", e => MoveLeft())

setInterval(()=>{
    MoveRight()
}, 5000)

let contador=0,
    count= 0,
    widthImg = 100/sliderSection.length;

function MoveRight(){
    if(count >= sliderSection.length-1){
        count =0;
        contador=0;
        slider.style.transform= `translate(-${contador}%)`;
        slider.style.transition = "none";
        return;
    }
    count++;
        contador=contador+widthImg;
        slider.style.transform= `translate(-${contador}%)`;
        slider.style.transition = "all ease .6s";
}

function MoveLeft (){
    count--;
    if(count < 0){
        count= sliderSection.length-1;
        contador= widthImg * (sliderSection.length-1)
        console.log(contador)
        slider.style.transform= `translate(-${contador}%)`;
        slider.style.transition = "none";
        return;
    }
        contador=contador-widthImg;
        slider.style.transform= `translate(-${contador}%)`;
        slider.style.transition = "all ease .6s";

}