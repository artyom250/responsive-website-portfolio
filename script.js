window.addEventListener("scroll", function() {
    const about = document.querySelector(".about");
    about.classList.toggle("fixed", scrollY > 150);
    
    const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 250;
    about.classList.toggle("at-bottom", isNearBottom);
    
})