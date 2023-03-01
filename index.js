//adding hovered class in selected list items
let list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item)=>
        item.classList.remove("hovered"));
        this.classList.add("hovered");
}
list.forEach((item)=>{
    item.addEventListener('mouseover',activeLink) 
});

//menu toggle
let toggle = document.querySelector(".toggle");
let burger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let container = document.querySelector(".container");
let body = document.querySelector("body");

function toggleI(){
    navigation.classList.toggle("active");
    main.classList.toggle("active1");
    burger.classList.toggle("active2");
    // container.classList.toggle("active2");
    // body.classList.toggle("active2");
}
function toggleII(){
    navigation.classList.toggle("active");
    main.classList.toggle("active1");
    burger.classList.toggle("active2");
}
toggle.addEventListener("click",toggleI);   
burger.addEventListener("click",toggleII);