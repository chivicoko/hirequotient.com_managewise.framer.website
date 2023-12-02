
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
