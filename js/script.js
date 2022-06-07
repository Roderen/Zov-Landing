const tabs = document.querySelectorAll('.services__accordion-title') // Берём заголовки-кнопки всех итемов

tabs.forEach(tabs => {
    tabs.addEventListener('click', (e) => {
        const removeAccordionActive = document.querySelector('.services__accordion-title.active');
        if (removeAccordionActive && removeAccordionActive!==tabs) {
            removeAccordionActive.classList.toggle('active');
            removeAccordionActive.nextElementSibling.style.maxHeight = 0;
            removeAccordionActive.nextElementSibling.style.paddingBottom = 0;
        } // Чтобы можно было открывать только один итем, остальные закрываются
        
        tabs.classList.toggle('active');
        const accordionItemContent = tabs.nextElementSibling; // Так как в DOM после заголовка-кнопки сразу идёт блок с контентом, то "nextElementSibling" берёт его так как он следующий 
        if (tabs.classList.contains('active')) {
            accordionItemContent.style.maxHeight = accordionItemContent.scrollHeight + "px";
            accordionItemContent.style.paddingBottom = "44px"; // Анимация раскрытия (НЕ БУДЕТ РАБОТАТЬ БЕЗ transition В css)
        } else {
            accordionItemContent.style.maxHeight = 0;
            accordionItemContent.style.paddingBottom = "0px";
        } // Стандартный скрипт открытия/закрытия посредством удаления/добавления класса active и смена высоты для анимации
    })
})