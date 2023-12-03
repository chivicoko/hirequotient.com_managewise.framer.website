// faq accordion
function toggleAccordion(sectionNumber) {
    const content = document.querySelector(`.accordion-item:nth-child(${sectionNumber}) .accordion-content`);
    const header = document.querySelector(`.accordion-item:nth-child(${sectionNumber}) .accordion-header`);
    const headerSpan = header.querySelector('span');

    // Check the computed style for display property
    const contentDisplayStyle = window.getComputedStyle(content).getPropertyValue('display');

    if (contentDisplayStyle === 'block' || contentDisplayStyle === 'inline-block') {
        content.style.display = 'none';
        header.classList.remove('accordion-active');
        headerSpan.classList.remove('accordion-span-active');
    } else {
        content.style.display = 'block';
        header.classList.add('accordion-active');
        headerSpan.classList.add('accordion-span-active');
    }
}


// testimonials infinite carousel
const testimonyCopy = document.querySelector(".testimony-cards").cloneNode(true);
document.querySelector("article").appendChild(testimonyCopy);


// reveal sections/images on scroll
window.addEventListener('scroll', () => {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});