document.addEventListener("scroll",()=>{
    if (window.scrollY>500) {
        document.querySelector(".mynav").classList.add("bg-light")
        document.querySelectorAll(".nav-link").forEach((link)=>link.style.color="#26313c")
        document.querySelector(".dark-logo").classList.remove("display-none")
        document.querySelector(".white-logo").classList.remove("inline-b")
        document.querySelector(".white-logo").classList.add("display-none")
        document.querySelector(".dark-logo").classList.add("inline-b")
    }
    else{
        document.querySelector(".mynav").classList.remove("bg-light");
        document.querySelectorAll(".nav-link").forEach((link)=>link.style.color="#fff")
        document.querySelector(".white-logo").classList.remove("display-none")
        document.querySelector(".dark-logo").classList.remove("inline-b")
        document.querySelector(".dark-logo").classList.add("display-none")
        document.querySelector(".white-logo").classList.add("inline-b")
    }
})