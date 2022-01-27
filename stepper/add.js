const nextBTN = document.getElementById('next-btn') ;
const prevBTN = document.getElementById ('prev-btn') ;
const progress = document.getElementById('progress'); 
const steps = document.querySelectorAll(".circle");

let index = 0 ;
nextBTN.addEventListener("click", function(){
    index++;
    if ( index > steps.length)
         { 
              index = steps.length;
         }

    steps.forEach((item ,i) => {

        if (i < index) {
            item.classList.add('active');
        }

        else{
            item.classList.remove('active');
        }

    });


}) ;


prevBTN.addEventListener('click' , function(){
    index--;
    if (index < 0) 
    index = 0 ;


})

const active_steps=document.querySelectorAll(".active");

progress.style.width=((active_steps.length-1)/(steps.length-1))*100+"%" ;
