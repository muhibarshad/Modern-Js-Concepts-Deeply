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
