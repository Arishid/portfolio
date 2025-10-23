const accordionButtons = document.querySelectorAll(".accordion .accordion-button");

accordionButtons.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const accordion = botao.parentElement;
        if (accordion.classList.contains("open")) {
            accordion.classList.remove("open");
        } else {
            accordion.classList.add("open");
        }
    });
});
