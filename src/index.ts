import { initRouter } from "./router";
import "./components/boton";
import "./components/papel";
import "./components/piedra";
import "./components/tijeras";

(function () {
  const root = document.querySelector(".root");
  initRouter(root);
})();