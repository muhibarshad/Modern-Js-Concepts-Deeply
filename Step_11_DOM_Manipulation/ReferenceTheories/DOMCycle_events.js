"use strict";
document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  console.log("The only HTML file is parsed and JS files run completely");
});
window.addEventListener("load", (e) => {
  console.log(e);
  console.log(
    "When images and external files like css are parsed and run completely"
  );
});
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  console.log(e);
  console.log("When someone closing the tab then what happens");
  e.returnValue = ""; //means make a pop up for not to go out especially use when someone is filling form and writing blog and trying to remove from teh tab in that case teh sensitive data become lost
});
