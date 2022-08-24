<div align="center">
  <img src="logo.png">
</div>

<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/muhib7353" data-color-scheme="no-preference: light; light: light; dark: dark;" aria-label="Follow @muhib7353 on GitHub">Follow @muhib7353</a>

# Modern JavaScript Concepts Deeply

>JavaScript works on the different browsers engine .JavaScript follows the JIT(just in time compilation).It is object-oriented,multi paradiagm,single thread language.This readMe.md file contains the core concepts after you learning the Vanilla JavaScript and fundamentals of JavsScript .If you are begginer and want to continue the modern javaScript features than you are in the right repository. choose your topic from the Contents , diverge into the deep concepts of JavaScript and enjoy your coffee☕😁.


# Contents
1.[Functions](#🔴argument-passing-in-the-funtions)
* [Permittive and objects](#permittive-and-objects)
* [First Class Functions and Higher Order Functions](#🔴first-class-functions-and-higher-order-functions)

2.[Data Structures (Arrays,Strings,Maps,Sets,ArrayMethods)](#data-transmissions)
- [Map_Method](#map-method)
- [Filter_Method](#filter-method)
- [Reduce_Method](#reduce-method)
- [Find_Method](#find-method)
- [FindIndex_Method](#findindex-method)
- [Some_Method](#some-method)
- [Every_Method](#every-method)
- [Flat_and_FlatMap_Methods](#falt-and-flatmap-methods)
- [Sort_Method](#sort-method)
- [Fill_Method](#fill-method)
- [From_method](#from-method)

3.[Numbers,Dates,Timers](#converting-numbers)
* [ParseInt and ParseFloat](#parseint-and-parsefloat)
* [isNan](#isnan)
* [isFinite](#isfinite)
* [isInteger](#isinteger)
* [Math Functions and Rounding](#math-functions-and-rounding)
* [Reminder Operater](#reminder-operater)
* [Numeric Operater](#numeric-operater)
* [BIGINT](#bigint)
 
  
# 🔴Argument passing in the funtions
 ## Permittive and objects 
   ##### Permittive values passing to functions.
   When we should pass the permititive dataType as an argument to the function .
   Then the function parameter just copy the argument .So,its means any change in the
   function parameter does not effect the original value of the argument.This is same
   in the C++ (pass by value).
      
###### Example:

```js
   let x=4; 
    function z(y){ 
     y=5; 
     return y; 
   } 
   console.log(x); 
   console.log(z(x)); 
``` 

     
##### Objects passing to functions.
  In objects,consider the same scenerio in the above portion,functions  parameter copy the
  address of the argument object in the stack not make the copy of the values in the heap.
  So,any change in the methods inside the function change the method in the heap.So,it actually 
  change the original value .(just like in the C++,(pass by refernce)).But in C++,we actually
  pass by refernce,but in JS all dataTypes are always pass by value.Its confusing,in objects 
  address value is passed not refernce.


# 🔴First Class Functions and Higher Order Functions
 Functions are be expressions as:
 ```js
 const sum=function(a,b){
  return a+b;
 }
 ```
 Function declerations are:
 ```js
 function(a,b){
    return a+b;
 }
```
so actually,the functions are just the values .We know that objects are also be simple 
values we can apply the methods on the objects .So ,we can also be apply the methods 
on the functions.Yes,thats true.

## Defination:
  Functions can also be passed as an arguments .As we see in the addEventListeners
```js
document.addEventListener('click',sum);
```
functions can also be retrive as return :
```js
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

# Data Transmissions

Data Transmissions are the ways of looping the arrays.We know that the forEach method in the arrays .
These methods are same as forEcah methods.But the major difference is forEach method is only use to
looping over the arrays.But the data transmissions are returning the array contaning what we return
on each callBack of the index function.This is the more better way to write the cleaner code as the
funtional programming instead of writing the old for of looping ways.
There are three methods of data transmissions:

- [Map_Method](#map-method)
- [Filter_Method](#filter-method)
- [Reduce_Method](#reduce-method)
- [Find_Method](#find-method)
- [FindIndex_Method](#findindex-method)
- [Some_Method](#some-method)
- [Every_Method](#every-method)
- [Flat_and_FlatMap_Methods](#falt-and-flatmap-methods)
- [Sort_Method](#sort-method)
- [Fill_Method](#fill-method)
- [From_method](#from-method)

## Map Method

Map method is same as the forEach method but it return expressions and statements in the new array for
each index .We can apply the mathematical conversions and return the the statements in the new array.
Use the arrow functions as the callback function.
For example see the [Map example](/Step_9_Arrays/mapMethod.js)

## Filter Method

Filter according to its name it is filtering .So it can make the new array by filtering the
array on which this method is applying .Filtering is done as ,operators and ,if/else satements
or many more methods.Use the Arrow functions as the callBack functions.
for example see the [Filter Example](/Step_9_Arrays/filterMethod.js)

## Reduce Method

Reduced method return only the single value.After doing the some manipulation on the whole
array.Its like a snowBoll who is running over the entire array starting from the 0 index to last index.
and return the maipulated value.We can apply the multiplication,addition,subtraction ,division,
max and min find also.

> The first argument of the callback functionis always the accamulator.That can be updated on every callback function returns.
> We can also specify the second argument as the starting point from where the accmulator can start by giving its position .
> For example see the [Reduce Example](/Step_9_Arrays/reduceMethod.js)

## Find Method

Find method is very similar to reduce method.Because it takes the some boolean value and return the
statement according to it if it is true.Same as Find method it takes the boolean value
but it returns the only first statement that matches in the array first.

> Note:
> The major differece between the find method and the filter method is that ,filter method returns the new array but the find method only returns the single value.
> For example see the [Find Example](/Step_9_Arrays/findMethod.js)

### Chaining Methods

The chaining methods are simple as apply all the map,filter and reduce methods together and avoid to make the new varaibles.
For better understanding see the **_Income,Outcome,Interest_** part in the [Bankist-App](/Step_9_Arrays/Jones_Schedtmen_project_Bankist_starter/script.js) or see the more better and simple
understanding see the [Chaining-methods](/Step_9_Arrays/chainingMethods.js).

## FindIndex Method

Find index method is the cousion of th efind method😁.Beacuse it can actually work same as th find method. In find method we get first value of the array on which the codition satisfies, but findIndex method we should get the `index` of that value except the value.

To see the exapmle see the [Find Index ](/Step_9_Arrays/findIndex.js).


Suppose one of your application user want to delete its account.To find its index use findIndex method.

- Use `Array.prototype.findIndex()` method to find its index in the accounts array.
- `Array.prototype.findIndex()`returns index of first account having true condition in entire array.
- Then use `Array.prototype.splice()` method to delete that account in the array.(mutate the original array)

Data
```js
const account1={userName:'ks',pin:0000};
const account2={userName:'am',pin:9999};
let accounts=[account1,account2];
```
Functionality
```js
let currentUser=account2;
const deleteAccount=function(accs){
 const index = accs.findIndex(
      acc => acc.userName === currentUser.userName
    );
    accs.splice(index, 1); 
}
```

## Some Method

Firstly we have to understand the includes method.In includes method we return the `false or true` if
the given value exist in tha array or not.

```js
const movements=[100,800,600,-500,-300,1000,-200];
console.log(movements.includes(-300));//true
console.log(movements.includes(-90000));//false

```

The drawBack of includes method is that ,we cannot apply the condition to get the specific that value
on which the condition satisfies.Let Introduce the **_SOME_** method on that returns if the value exist or satisfies the condition .
To see the example see the `Request Laon` part in the [Bankist-app](/Step_9_Arrays/Jones_Schedtmen_project_Bankist_starter/script.js)

## Every Method

Every method is the brother of the Some method.According to its name ,it returns true or false
only if all the elemenst in the array satisfies the condition.

## Falt and flatmap Methods

### Flat

In Simple word to get the nested arrays into one single array we use the flat methods.
To go deeper and deeper nested array has thietr own nested arrays pass the parameter.
**1** as a default one nested deeper and 2 for the 2 times deeper arrays deeper .

### FaltMap

We can basically use the flat and map methods together in most cases .So in ES2019 it was also introduce the flatMAp method to use both methods in the one method.

For the example see the [Flat and FlatMap Example](/Step_9_Arrays/flat_and_flatMap_methods.js)

## Sort Method

Sort method can actually sort the strings.And also sort the numbers but in a string way not numerical way.Sorting can mutate the original array.

```js
const students=['Muhib','Ali','Hamza','Zariab','Bilal'];
console.log(students.sort());//sort the students array
const rollNo=[40,1,9,70,34,22];
console.log(rollNo.sort());//does not sort the array

```

##### To solve this problem

Suppose we have an array like this

```js
const rollNo=[40,1,9,70,34,22];

```

we can pas the arrow function in the sort method


This is the acending order sorting the array.
```js
rollNo.sort((a,b)=>{
   if(a>b) return 1;
   if(a<b) return -1;
})

```
Logic behind is that if a > b then return true means chnge the `a,b as b,a ` then if a< b then do not change the position .And it loops over the array array.lenghth times and every callback the largest element goes to the end of the array.And In second iteration the second largest element goes to its 2nd last position.go and go on and then finally we get the sorted array.

This is the decending order sorting the array.
```js
rollNo.sort((a,b)=>{
   if(a>b) return -1;
   if(a<b) return 1;
})

```
Now ,the thing we notice is that if a>b then it returns the 1 means change it if we get the positive value.So we can also write as 

This is the best way to  acending order sorting the array.
```js
rollNo.sort((a,b) => a-b);

```

This is the best way to  decending order sorting the array.
```js
rollNo.sort((a,b) => b-a);

```
## Fill Method
  Fill method can actually mutate the array and fill the indexes that we want to fill with the element.
  Syntx:
   >arr.fill(element Want To Fill,starting Index,Ending Index Except Itself Including)
   For Better understanding see the example [Fill Method example](/Step_9_Arrays/fillMethod.js)

## From Method
   From method not be as a method on the array.It can be applied on the `Array.from` constructor 
   method.means that a method of iterable can be applied on the constructor to make a new empty array or fill the array.
   sytnx:
   >Array.from({length:7},()=>1);
   Its first parameter is the length object and second parameter is the map method returning something and fill the array.
   See example [From Method](/Step_9_Arrays/fromMethod.js)
   The major benefit of the From method is it can convert the  structure data which can look like the arrays  into original array.We can also pass the mov function in the second parameter that can perform the some methods on it.



# Converting Numbers
 In javascript the point values like `0.1+0.2` results as `0.300000000004` not as expected `0.3`,the reason behind is , in JS and some other languages like the PHP and Ruby the numbers and point values are stored in the binary format 64x based 2. So such 
 point values results into infinity like in the based 10 format results as `3/10=3.33333..infinity`.But JS tried its best to resolve this problem.
## Some basic conversions are here:
 * ### +:
   To convert the string into number we basically use the `Number('20')` but in we can aslo convert them by using the + operater `+('20)`.For more understanding see the examples in the [Converting Numbers File](/Step_10_Dates_numbers_timers/convertingNumbers.js)
   >It will do type cocerion.
 * ### ParseInt and ParseFloat:
   In modern JS ,we use the `Number.`Object with these parsing functions to highlight that it refers to the `Number` object.ParseInt coverts the strings having numbers and some alphabtes into only a single number value.
   Same as for the ParseFloat it converts the floating values to strings .Examples in the [Converting Numbers File](/Step_10_Dates_numbers_timers/convertingNumbers.js)
   >basic advantage of using in when we get the CSS values without units.
 * ### isNan:
   isNan returns the false when the checking dataType is a number.Beacuse it gives true only when checking dataType  `is_Not-A-Number`.Examples in the [Converting Numbers File](/Step_10_Dates_numbers_timers/convertingNumbers.js)
 * ### isFinite:
   To check the given value is a number or not.
   >It will do type cocerion.
 * ### isInteger:
   To check the given value is an unteger or not.
   Examples in the [Converting Numbers File](/Step_10_Dates_numbers_timers/convertingNumbers.js)

# Math Functions and Rounding
  Numbers are the premittive dataTypes not the objects so we cannot call the methods on the numbers.But the JavaScript do the ***_BOXING_***. Means convert the number into the object then calls the methods on it then again convert it into the premittive dataType.
  ## Some imortant Maths functions are here
* Math.sqrt();
* Math.max();
* Math.min();
* Math.PI();
* Math.trunc();
* Math.floor();
* Math.ciel();
* Math.round();
* (number).toFixed();
* Math.random();
 ### To get the random number in the given range 
```js
const getRandom=(max,min)=>Math.floor(Math.trunc(Math.random()*(max-min)+1)+min);
//0....1
//(max-min)...1___After multiplying with the (max-min)
//(max-min+min)...min+1_____After adding the min on both sides
//(max-min)....min+1________results
```
Examples in the [Math Functions and Rounding](/Step_10_Dates_numbers_timers/MathFunctions_And_Rounding.js)

# Reminder Operater 
 Reminder operater is shown by `%` it gives the reminder.
```js
console.log(3%2);
console.log(8%2);
```
# Numeric Operater 
  Numeric operater is represented by the `_` underscore operater.It is basically used to separete the big numbers .
```js
let earthMass=480_806_090;
console.log(earthMass);
let PI=3.14_5296;
console.log(PI);
console.log(Number('230_890_9000'));//NAN->beacuse it converts string to number
console.log(parseInt('890_678_00)'));//890->it parse where the number ends are some string like format starts 
```
# BIGINT
   We know that the numbers are stored in the binary format of based 64.It means 64  0101... values can be stored .But actually 53 bits are used to stored the numbers the other can be used for the sign of the number.
   ```js
   const hugeNum=92032308203820382038028320382038203;
   console.log(hugeNum);//9.203230820382039e+34
   ```
   Not give the complete value it round it.So in Es 2020 a new feature is added named as `BigInt()` which can stored a big number as we want 
   ```js
   const hugeNum=BigInt(92032308203820382038028320382038203);
   console.log(hugeNum);//92032308203820390700254681014206464n
   ```   
  > we can aslo use the `n` at the last of the number as a alternative of `BigInt()`.
   ```js
   const hugeNum=92032308203820382038028320382038203n;
   console.log(hugeNum);//92032308203820390700254681014206464n
   ```   
   ## Some manipulations:
   
   ```js
    console.log(20n>15);//true
    console.log(30n===30);//false(beacuse dataType is different)
    console.log(20n=='20');//true
    console.log(600n+700n);//1300n
    console.log(9327937193739739398303n+' huge amount');//9327937193739739398303 huge amount
    console.log(10n/3n);//3n(round off the 3.3333333)
   ```   