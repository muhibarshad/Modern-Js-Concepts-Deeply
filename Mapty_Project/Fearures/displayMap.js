/*We use the third party library, named Leaflet . use the cdn (content delievery notation) link in the index.html file. Firstly add the script file of the leaflet then add the script.js file of your owns the reason is all the variables and objects taht are constant in any script file are accessible to all files if they are execuated first. */
/*Displaying Map:
   Firstly add the overview code into it, in this L is the global object of the library L.map('idOfTag_where_we_want_to_display_the_map).setview(corrdinatesArray,defaultZooomX);
   .tileLayer-->conatines the theme of the map we can change it by the organization(.org)
*/

//cdn reference
/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" />    
<script defer src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js" integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=" crossorigin=""></script> */

//docs code

//setting the map id and display the position with the current geoloaction and zoom in
const map = L.map("map").setView([51.505, -0.09], 13);

//display the theme and attached it to the map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//display a marker and attached it to the screen and popup
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
