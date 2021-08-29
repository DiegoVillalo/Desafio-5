import { state } from "../../state";
const rules = require("url:../../img/reglas.svg");
state.getStorage();

export function init(params) {
  const div = document.createElement("div");
  div.classList.add("page");
  const style = document.createElement("style");

  div.innerHTML = `
        <img class="img-rules" src="${rules}">
        <button-comp class="btn-comp">¡jugar!</button-comp>
        <div class="hands">
            <hand-scissor></hand-scissor>
            <hand-stone></hand-stone>
            <hand-paper></hand-paper>
        </div>

    `;

  style.innerHTML = `
    .page {
        width: 100%;
        height: 100vh;
        padding-top: 75px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .hands {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .img-rules {
        height: 240px;
    }`;

  const button = div.querySelector(".btn-comp");
  button.addEventListener("click", () => {
    params.goTo("/juego");
  });
  div.appendChild(style);
  return div;
}
