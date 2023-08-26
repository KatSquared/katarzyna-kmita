//
// IN-VIEW ONLY ANIMATIONS (to save processing power)
//

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
});

const headers = document.querySelectorAll('h1');
const rightArrows = document.querySelectorAll('.fa-arrow-right-long');
const leftArrows = document.querySelectorAll('.fa-arrow-left-long');

headers.forEach((el) => observer.observe(el));
rightArrows.forEach((el) => observer.observe(el));
leftArrows.forEach((el) => observer.observe(el));
