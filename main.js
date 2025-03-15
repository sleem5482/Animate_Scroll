let section = document.querySelector(".three");
let spans =document.querySelectorAll(".progress span");


window.onscroll=()=>{
    if(window.scrollY>section.offsetTop-100){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width;
        })
    }
    else {
        spans.forEach((span)=>{
            span.style.width=0;
        })
    }
}