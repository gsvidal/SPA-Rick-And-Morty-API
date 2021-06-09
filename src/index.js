import router from "./routes";

window.addEventListener("load", router);

//Routes Listener when appears a # in the route
window.addEventListener("hashchange", router);