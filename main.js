const arrows = document.querySelectorAll(".arrow");
const movie = document.querySelectorAll(".releases-container");

arrows.forEach((arrowScroll,i) => {
    const imgNumber = movie[i].querySelectorAll("img").length;
    let counter = 0;
    arrowScroll.addEventListener("click", () => {
        counter++;
        if(imgNumber - (Math.floor(window.innerWidth/300) + counter) >= 0){
            movie[i].style.transform = `translateX(${
                movie[i].computedStyleMap().get("transform")[0].x.value - 320
            }px)`;
        } else {
            movie[i].style.transform = "translate(0)";
            counter = 0;
        }
    })

    console.log(movie[i].querySelectorAll("img").length);
});

const ballToggle = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".sidebar-container, .sidebar-icon, .body-container, .new-release-text, .content-featured-img, .content-featured-img1, .navbar-items, .nav-menu, .nav-profile, .toggle");

ballToggle.addEventListener("click",() => {
    items.forEach(item => {
        item.classList.toggle("light");
    })
    ballToggle.classList.toggle("light");
})