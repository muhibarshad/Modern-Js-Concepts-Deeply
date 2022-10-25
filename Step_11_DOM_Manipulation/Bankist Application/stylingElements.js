'use strict';
//Styling Elements

//CSS_properties
let cookieMessage=document.createElement('div');
cookieMessage.style.backgroundColor='#ff585f';
let defaultPageStyle_1=getComputedStyle(cookieMessage).height;
let defaultPageStyle_2=getComputedStyle(cookieMessage).backgroundColor;

//Adding the property to default page propetry
cookieMessage.style.height=Number.parseFloat(defaultPageStyle_1)+100+'px';


//Attributes_set_and_get
let appLogo=document.querySelector('.nav__logo');

console.log(appLogo.alt);
console.log(appLogo.src);
console.log(appLogo.getAttribute('href'));

appLogo.alt='Alu bhai'
appLogo.setAttribute('logoMaker','WaleedAdnan')


//Classes
appLogo.classList.add('Muhib')
appLogo.classList.remove('Muhib')
appLogo.classList.toggle('Muhib')
appLogo.classList.contains('Muhib')

