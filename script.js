// ABRIR MENU NO CELULAR

function abrirMenu() {

    const menu = document.querySelector("nav");

    menu.classList.toggle("ativo");

}


// AGENDAMENTO

function agendar() {

    const telefone = "5521999999999";

    const mensagem =
        "Olá! Gostaria de agendar um horário na Jura Barber Gold.";

    const url =
        "https://wa.me/" +
        telefone +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(url, "_blank");

}


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector("nav")
            .classList.remove("ativo");

    });

});
