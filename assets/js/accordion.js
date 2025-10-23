const accordionButtons = document.querySelectorAll(".accordion .accordion-button");

accordionButtons.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const accordion = botao.parentElement;
        if (accordion.classList.contains("open")) {
            accordion.classList.remove("open");
            accordion.classList.add("close");
        } else {
            accordion.classList.add("open");
            accordion.classList.remove("close");
        }
    });
});
