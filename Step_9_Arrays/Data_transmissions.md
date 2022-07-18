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
  >The  first argument of the callback functionis always the accamulator.That can be updated on every callback function returns.
  >We can also specify the second argument as the starting point from where the accmulator can start by giving its position .
  For example see the [Reduce Example](/Step_9_Arrays/reduceMethod.js)