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
  Numbers are the premittive dataTypes not the objects so we cannot call the methods on the numbers.But the JavaScript do the ***_BOXING_***. Means convert the number into the object then calls the methods on it then again conver it into the premittive dataType.
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
Examples in the [Converting Numbers File](/Step_10_Dates_numbers_timers/MathFunctions_And_Rounding.js)
