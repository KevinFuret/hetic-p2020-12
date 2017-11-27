import popup from "./popup.js";
import Headroom from "headroom.js";

document.addEventListener("DOMContentLoaded", () => {
  popup();
    const header = document.querySelector(".header");
    const headroom  = new Headroom(header);
    headroom.init();

});
