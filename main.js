//get my element
let section = document.querySelector(".three");
let spans =document.querySelectorAll(".progress span");

//this function call when i am scrolling in my page
window.onscroll=()=>{
    if(window.scrollY >= section.offsetTop-100){//if size scroling of the window is greater than the size scrolling of the section is 
        spans.forEach((span)=>{
            span.style.width=span.dataset.width;//using data set in html and increasing the width with it
        })
    }
    else {
        spans.forEach((span)=>{
            span.style.width=0;//else reset the width
        })
    }
}