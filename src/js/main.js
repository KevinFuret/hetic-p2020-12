import popup from "./popup.js";
import Headroom from "headroom.js";

document.addEventListener("DOMContentLoaded", () => {
  popup();

    console.log(Headroom);
    var header = document.querySelector(".header");
    var headroom  = new Headroom(header);
    headroom.init();

});
