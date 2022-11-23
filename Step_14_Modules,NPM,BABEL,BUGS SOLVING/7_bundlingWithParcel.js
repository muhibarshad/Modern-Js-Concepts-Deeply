/*Bundling actually means we have to bundle our only importnat and used code withput adding additional non-reusedcode 

Babel:
Parcel has the built in babel present of env to transpile the ES6 synatx code into ES5 to run in the old browsers like Explorer and windows XP. 
  Babel has transpile the only ES6 syntax like arrow function, nullish collasing operators and template literals spread operators into ES5 not the entire methods  and classes and promises like unctionalites in the presets.
To traspile them we use polifilling methods using the babel library of *code-js*
import 'core-js/stable/array/find';
npm i core-js
npm i regenerator-runtime
import 'core-js/stable/promise';
import 'core-js/stable/promise';
import 'regenerator-runtime/runtime';

  //for modules not to load everytime
  if(module.hot){
    module.hot.accept()
}


==========================================================================
During deployment
   1-npm i parcel --save-dev
   //for specfic version use: npm i parcel @1.2.3
   2-set "script":"index.html " in the .pacakage.json file to "defualt":"index.html " or may be "targets": {
    "main": false
  },
  3.then add this in the json file after this step
    "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
  },
  4.run command of npm run build
  5.git init
  6. add all the ignored files like dist parcel and other nodemodules into it 
  7.git status
  8.git add -A
   
*/