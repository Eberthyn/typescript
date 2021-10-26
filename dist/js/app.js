alert("Estudar você deve! -Yoda");
import { NegociacaoController } from "./controllers/necociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
