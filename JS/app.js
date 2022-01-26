const type = document.getElementById('type'); 
const arrType = document.getElementsByClassName('type');
const spacing = document.getElementsByClassName('spacing');

type.addEventListener('keyup' , function(event){

    if(event.keyCode === 13){
        for(var i=0 ; i <= arrType.length ; i++) {
            arrType[i].style.display="none";
            spacing[i].style.display="none";

            switch(type.value){
                case "دين": {
                    arrType[0].style.display="flex";
                    spacing[0].style.display="flex";
                    break;
                }

                case "تاريخ": {
                    arrType[1].style.display="flex";
                    spacing[1].style.display="flex";
                    break;
                }
                
                case "روايات": {
                    arrType[2].style.display="flex";
                    spacing[2].style.display="flex";
                    break;
                }

                case "سياسة": {
                    arrType[3].style.display="flex";
                    spacing[3].style.display="flex";
                    break;
                }

                case "اقتصاد": {
                    arrType[4].style.display="flex";
                    spacing[4].style.display="flex";
                    break;
                }

                case "طبخ": {
                    arrType[5].style.display="flex";
                    spacing[5].style.display="flex";
                    break;
                }

                default: {
                    document.getElementById('message').style.display="block";
                    break;
                }
            }
        }
        
        
    }
});

/* Slider */
var slideIndex = 0 ;

showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    slideIndex = n ;
    showSlides(slideIndex);
}

function showSlides(n){
    var slides = document.getElementsByClassName('slider') ;
    var dot = document.getElementsByClassName('dot');
    var i ;
    for (i = 0 ; i < slides.length ; i++ ){
        slides[i].style.display = "none";
    }
    for (i = 0 ; i < dot.length ; i++ ){
        dot[i].className = dot[i].className.replace(" active" , "") ;
    }

    if(n > slides.length)
        slideIndex = 1 ;

    if (n < 1) {slideIndex = slides.length}

    slides[slideIndex-1].style.display = "block" ;
    dot[slideIndex-1].className += " active"; 

  // setTimeout(showSlides, 3000) ;  /* لما استخدم الفنكشن ذي م اقدر اتحكم بحركة الصور في السلايدر كويس .. وقفتها */
}



