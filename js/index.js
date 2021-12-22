let whiteLogo=document.querySelector(".white-logo")
let darkLogo=document.querySelector(".dark-logo")
let nav=document.querySelector(".mynav")
document.addEventListener("scroll",()=>{
    if (window.scrollY>200) {
       darkLogo.classList.remove("d-none")
       whiteLogo.classList.add("d-none")
       nav.classList.add("nav-scroll")
    }
    else{
        darkLogo.classList.add("d-none")
        whiteLogo.classList.remove("d-none")
        nav.classList.remove("nav-scroll")
    }
})