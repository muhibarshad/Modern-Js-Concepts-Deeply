//=====================================================================
/*Strings are basically the permititative dataTypes:
 These are iterable.
 when we make the string it converts into the objects.So,we can call the methods on that strings.
 after appling the methods on the string it retures the dataType.
ImpNote:
 All the string methods on the strings are not actually changing the string
 string methods are case sensitive
 */
//=====================================================================
'use strict';

//iterables as array
const shopName=' Muhib Qalandari Chaiwala Muhib wala:)';
const located='Near the short bazar';
console.log(shopName[0]);//M
console.log(shopName[1]);//u
console.log(shopName[2]);//h

//methods
console.log(shopName.length);//24
console.log(shopName.indexOf('a'));//7
console.log(shopName.lastIndexOf('a'));//23
console.log(shopName.slice(6));//Qalandari chaiwala
console.log(shopName.slice(0,5));//Muhib
console.log(shopName.slice(-2));//al
console.log(shopName.slice(0,-1));//Muhib Qalandari Chaiwal
console.log(shopName.slice(shopName.indexOf(' ')+1));//Qalandari Chaiwala
console.log(shopName.toLowerCase());
console.log(shopName.toUpperCase());
console.log(shopName.trim());//removes all the frint and back whiteSpaces
console.log(shopName.replace(')','('));
console.log(shopName.replace(/Muhib/g,'Ali'));//to replace all it is the regylar expression
console.log(shopName.includes('Muhib'));
console.log(shopName.startsWith(' Muh'));
console.log(shopName.endsWith(':)'));


//strings to objects and object to strings
console.log(typeof new String('Muhib'));//object
console.log(typeof new String('Muhib').indexOf('M'));//number
console.log(typeof new String('Muhib').slice(0));//string

//fix capitalization in the name
const nameO='muHiB';
const setName=function(nameF){
 let tolower=nameF.toLowerCase();
    return `${tolower[0].toUpperCase()}${tolower.slice(1)}`;
}
console.log(setName(nameO));  

//comapring emails
let email='muhibAli000gmail.com';
let emailUserEnter=' muhibAli000Gmail.COM \n';
const setEmail=function(emailF){
    let tolowerAndTrim=emailF.toLowerCase().trim();
    return `Your Correct email is ${tolowerAndTrim}`;
}
console.log(setEmail(emailUserEnter));

//replacing example
const currencyInDollars='178.90$';
const currencyConvert=currencyInDollars.replace('$','#');
console.log(currencyConvert);

/*****************PRACTICAL EXAPMLES************************/
//practical example:01
const cahiOrder=function(chai){
    if(chai.slice(-2)==='A1' || chai.slice(-1)==='A'){
     console.log(`You are ordering the VIP version.`);
    }
    else{
     console.log('You are ordering the local version');
    }
 };
 const chai1='Dandoori Chai A1';
 const chai2='Dandoori Chai A';
 const chai3='Dandoori Chai A-';
 cahiOrder(chai1);
 cahiOrder(chai2);
 cahiOrder(chai3);
 

//practical example:02
const checkBagges=function(statement){
    let correctStatement=statement.toLowerCase();
    if(correctStatement.includes('knife') || correctStatement.includes('gun')){
        console.log('Sorry Sir ,you are not enter mall with these accessiories');
    }
    else{
        console.log('Welcome Sir!');
    }
}
checkBagges('I have a scissior,Gun and some clothes');
checkBagges('I have a mobile ,laptop,and some papers');
checkBagges('I have a documents,FOOD and some KNIfes');
