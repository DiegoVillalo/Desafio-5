import { init as initBienvenido } from "./pages/bienvenido";
import { init as initReglas } from "./pages/reglas";
import { init as initJuego } from "./pages/juego";
import { init as initResultados } from "./pages/resultados";

const routes = [
  {
    path: /\/Desafio-5\/bienvenido/,
    component: initBienvenido,
  },
  {
    path: /\/Desafio-5\/reglas/,
    component: initReglas,
  },
  {
    path: /\/Desafio-5\/juego/,
    component: initJuego,
  },
  {
    path: /\/Desafio-5\/resultados/,
    component: initResultados,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    container.innerHTML = ``;
    routes.find((r) => {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        container.appendChild(el);
      }
    });
  }

  if (location.host.includes("github.io")) {
    goTo("/Desafio-5/bienvenido");
  } else {
    handleRoute(location.pathname);
  }
}