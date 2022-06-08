const burgerBtn = document.querySelector('.burger__btn');
const burgerActive = document.querySelector('.burger__menu');
const body = document.querySelector('body');
const html = document.querySelector('html');

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('active');
    html.classList.toggle('active');
    burgerActive.classList.toggle('burger__menu-active')
})






const tabs = document.querySelectorAll('.services__accordion-title');
const screenWidth = window.screen.width;

tabs.forEach(tabs => {
    tabs.addEventListener('click', (e) => {
        const removeAccordionActive = document.querySelector('.services__accordion-title.active');
        if (removeAccordionActive && removeAccordionActive!==tabs) {
            removeAccordionActive.classList.toggle('active');
            removeAccordionActive.nextElementSibling.style.maxHeight = 0;
            removeAccordionActive.nextElementSibling.style.paddingBottom = 0;
        }
        
        tabs.classList.toggle('active');
        const accordionItemContent = tabs.nextElementSibling;
        if (tabs.classList.contains('active')) {
            accordionItemContent.style.maxHeight = accordionItemContent.scrollHeight + "px";
            if (screenWidth > 360) {
                accordionItemContent.style.paddingBottom = "44px";
            } else {
                accordionItemContent.style.paddingBottom = "0px";
            }
        } else {
            accordionItemContent.style.maxHeight = 0;
            accordionItemContent.style.paddingBottom = "0px";
        }
    })
})