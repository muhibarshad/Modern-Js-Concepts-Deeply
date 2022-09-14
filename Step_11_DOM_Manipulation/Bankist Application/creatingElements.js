'use strict';

/*Working with the query Selectors the when we deleted the elements manully from the DOM 
then it will not be deleted from the querySelectors Nodes, but using the getElementByID or by TagName or by className then it will aslo be deleted from the HTML collection*/

const header=document.querySelector('.header');
const cookieMessage=document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML='We have use your functionality and add it to the cookies <button class="btn btn--close--cookie">Got it!</button>';

header.prepend(cookieMessage);
header.append(cookieMessage);//movies the cookieMessage Elemnet to the end of the parent headrer

header.insertAdjacentElement("beforebegin",cookieMessage);//movies the cookieMessage Elemnet to the start of the parent headrer

header.after(cookieMessage);//movies the cookieMessage Elemnet to the end of the parent headrer

header.before(cookieMessage);//movies the cookieMessage Elemnet to the start of the parent headrer

//To create Copy of that element and insert it 
header.append(cookieMessage.cloneNode(true));

header.insertAdjacentElement("afterend",cookieMessage);

document.querySelector('.cookie-message').addEventListener('click',function()
{
  cookieMessage.remove();
})

