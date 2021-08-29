import { init as initBienvenido } from "./pages/bienvenido";
import { init as initReglas } from "./pages/reglas";
import { init as initJuego } from "./pages/juego";
import { init as initResultados } from "./pages/resultados";

const routes = [
  {
    path: /\/juego\/bienvenido/,
    component: initBienvenido,
  },
  {
    path: /\/juego\/reglas/,
    component: initReglas,
  },
  {
    path: /\/juego\/juego/,
    component: initJuego,
  },
  {
    path: /\/juego\/resultados/,
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

  if (location.host.includes("DiegoVillalo.github.io")) {
    goTo("/juego/bienvenido");
  } else {
    handleRoute(location.pathname);
  }
}