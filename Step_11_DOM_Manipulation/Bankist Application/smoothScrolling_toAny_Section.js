
'use strict';
let btnScroll=document.querySelector('.btn--scroll-to');
let sectionToScroll=document.querySelector('#section--1');

btnScroll.addEventListener('click',(e)=>{
    sectionToScroll.scrollIntoView({behavior:"smooth"});
})
