//DOM traversing means that , how to select elements by its parent, child and siblings

//BY Childern:move down
const h1=document.querySelector('h1');
console.log(h1.childNodes);//gives everything inside this tag even comments also
console.log(h1.children);//gives the HTML Collection only
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

//BY Parent:move up
console.log(h1.parentNode);//parent element in ehich it develops
console.log(h1.parentElement);//same as above
console.log(h1.closest('h1').style.backgroundColor='red')//To get the closet parent when you don't know who it is

//BY Siblings:move sideways(only have to ways to get only previous and next)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);//to get all the siblings of it get by it
