document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const gameItems = document.querySelectorAll(".course-card"); // Select all course cards

    searchBar.addEventListener("keyup", (event) => {
        const searchText = event.target.value.toLowerCase();

        gameItems.forEach((item) => {
            const titleElement = item.querySelector(".course-title"); // Get course title
            const levelElement = item.querySelector(".course-level"); // Get course level
            let shouldDisplay = false;

            if (titleElement && levelElement) {
                const title = titleElement.textContent.toLowerCase();
                const level = levelElement.textContent.toLowerCase();

                // Check for specific search terms
                if (searchText.includes("html")) {
                    shouldDisplay = item.classList.toString().includes("htmlgame");
                } else if (searchText.includes("css")) {
                    shouldDisplay = item.classList.toString().includes("cssgame");
                } else if (searchText.includes("beginner")) {
                    shouldDisplay = level.includes("ระดับเริ่มต้น");
                } else if (searchText.includes("intermediate")) {
                    shouldDisplay = level.includes("ระดับกลาง");
                } else if (searchText.includes("advanced")) {
                    shouldDisplay = level.includes("ระดับสูง");
                } else if (searchText.includes("english")){
                    shouldDisplay = item.classList.toString().includes("game");
                } else {
                    shouldDisplay = title.includes(searchText) || level.includes(searchText);
                }

                item.style.display = shouldDisplay ? "block" : "none";
            }
        });
    });

    // Slideshow functionality (unchanged)
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 5000);
    }

    // Add click functionality to dots (unchanged)
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            slideIndex = i + 1; // Corrected index
            showSlides();
        });
    }


    //Filter Functionality (Improved)
    const filterPills = document.querySelectorAll('.filter-pill');

    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            filterPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.dataset.filter;
            filterCourses(filterValue);
        });
    });

    function filterCourses(category) {
        const courses = document.querySelectorAll('.course-card');

        courses.forEach(course => {
            if (category === 'all') {
                course.style.display = 'block';
            } else if (category === 'english') {
                if (course.classList.contains('game1') || course.classList.contains('game2') || course.classList.contains('game3')) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            } else {
                if (course.classList.contains(`${category}game1`) || course.classList.contains(`${category}game2`) || course.classList.contains(`${category}game3`)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const menuToggle = document.getElementById('menu-toggle');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
    });
});


const loader = document.querySelector(".loader");
const preloader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none"
    loader.style.display = "none"
})
