const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav_button_container");
const searchBtn = document.querySelector(".search_button");
const closeBtn = document.querySelector(".close_button");

searchBtn.addEventListener("click",() => {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click",() => {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});