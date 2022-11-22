/*Bundling actually means we have to bundle our only importnat and used code withput adding additional non-reusedcode 

firtsly intstall the parcel locally
npm i parcel --save-dev
npx parcel index.html start bundling
npm i parcel @1.2.3 for specific verions
then in scripts of the add the start and build 
"targets": {
    "main": false
  },
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build  index.html"
  },
  and run as npm run start or npm run build


  //for modules not to load everytime
  if(module.hot){
    module.hot.accept()
}
Parcel has the built in babel present of env to transpile the ES6 synatx code into ES5 to run in the old browsers like Explorer and windows XP. 
Babel:
  Babel has transpile the only ES6 syntax like arrow function, nullish collasing operators and template literals spread operators into ES5 not the entire methods  and classes and promises like functionalites in the presets.

  To traspile them we use polifilling methods using the babel library of *code-js*
  import 'core-js/stable/array/find';
npm i core-js
npm i regenerator-runtime
import 'core-js/stable/promise';
import 'core-js/stable/promise';
import 'regenerator-runtime/runtime';
*/
