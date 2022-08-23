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