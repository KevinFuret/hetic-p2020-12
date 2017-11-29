import popup from "./popup.js";
import Headroom from "headroom.js";
import youtube from "./youtube.js"

document.addEventListener("DOMContentLoaded", () => {
  popup();
  youtube();
    const header = document.querySelector(".header");
    const headroom  = new Headroom(header);
    headroom.init();

});
