# 🔴Argument passing in the funtions
## Permittive and objects 
##### Permittive values passing to functions.
 When we should pass the permititive dataType as an argument to the function .
 Then the function parameter just copy the argument .So,its means any change in the
 function parameter does not effect the original value of the argument.This is same
 in the C++ (pass by value).
 ###### Example:

```
   let x=4; 
    function z(y){ 
     y=5; 
     return y; 
   } 
 console.log(x); 
 console.log(z(x)); 
``` 

##### Objects passing to functions.
 In objects,consider the same scenerio in the above portion,functions parameter copy the
 address of the argument object in the stack not make the copy of the values in the heap.
 So,any change in the methods inside the function change the method in the heap.So,it actually 
 change the original value .(just like in the C++,(pass by refernce)).But in C++,we actually
 pass by refernce,but in JS all dataTypes are always pass by value.Its confusing,in objects 
 address value is passed not refernce.


# 🔴First Class Functions and Higher Order Functions
 Functions are be expressions as:
 ```
 const sum=function(a,b){
  return a+b;
 }
 ```
 Function declerations are:
 ```
 function(a,b){
    return a+b;
 }
```
so actually,the functions are just the values .We know that objects are also be simple 
values we can apply the methods on the objects .So ,we can also be apply the methods 
on the functions.Yes,thats true.

## Defination:
  Functions can also be passed as an arguments .As we see in the addEventListeners
```
document.addEventListener('click',sum);
```
functions can also be retrive as return :
```
function(a,b){
    a+=7;
    return function(){
       return (a*b)+100;
    }
}
```
so ,such functions that are getting some another function has an argument and ,such functions
that are returning some function are called the ***_HIGHER ORDER FUNCTIONS_***.

## So ,What is the difference b/w First Class Functions and Higher Order Functions?
  FIRST CLASS FUNCTIONS is the term used in the programming.But actually doing and writing the 
  such functions are called higher order functions.