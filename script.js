
//toggle menu icon and navigation
let scrollTopY = document.querySelector(".goTop");
let menu = document.querySelector(".header .container .navbar");
let menuImg = document.querySelector(".menuImg");
menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}

//add and remove active class, when nav link is clicked
let link = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(link).forEach((item, index) =>{
  item.onclick = (e) =>{
    let currentLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentLink.classList.remove("active");
    e.target.classList.add("active");
    menuImg.classList.remove("closeImg");
    menu.classList.remove("active");
  }
})

//window onscroll remove active classes
window.onscroll = () =>{
  menuImg.classList.remove("closeImg");
  menu.classList.remove("active");
  if (window.scrollY > 200){
    scrollTopY.style.display = "block";
  }else{
    scrollTopY.style.display = "none";

  }
}