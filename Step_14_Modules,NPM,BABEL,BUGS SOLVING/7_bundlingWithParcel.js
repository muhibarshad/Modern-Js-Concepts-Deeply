/*Bundling actually means we have to bundle our only importnat and used code withput adding additional non-reusedcode 
========================================================================
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
==========================================================================
  //for modules not to load everytime
  if(module.hot){
    module.hot.accept()
}


==========================================================================
During deployment
   0-bable the files 
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
  9-git commit -m"add:files"
  10-git push 
   
========================================================================
Git other commands
git reset --hard HEAD  (Actually go back to the previous commit)

Interesting :
To go to the any previous commit you do 
git log
copy the id of commit 
press q to quit
git --hard idOFcommit
press enter

When you are adding more and more features into a repository  than make new branch and add all the featues into it
git branch new-feature
to switched to the new branch 
git checkout new-feature
git add -A
git commit -m"new branch added"


To merge two branches
git checkout main
Now you are in the main branch 
git merge new-feature
now the current branch is merged with the checkout branch


=================================================================
Git and Github integration
made a githib remote repository not to add the readme, gitignore or license now if you have already existing git repository otherwise when adding it might give conflicts

then copy the url 
come to git 
git remote add origin url

this add the origin branch 
then push this branch to remote
git push origin nameOfbranch

if you have multiple branches then add push them one by one manually

then add the readme.md file through commandline

=======================================================================
netlify publication:

make an account
new site go to setting>build & deploy>CI/CD>link github>add repos.>add build command>add assests "dist"> deply
 
*/

