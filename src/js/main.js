import popup from "./popup.js";
import Headroom from "headroom.js";
import youtube from "./youtube.js";
import gestures from "./gestures.js";

document.addEventListener("DOMContentLoaded", () => {
  popup();
  youtube();
  gestures();
  // INITIALISATION OF THE MENU
    const header = document.querySelector(".header");
    const headroom  = new Headroom(header);
    headroom.init();


});
