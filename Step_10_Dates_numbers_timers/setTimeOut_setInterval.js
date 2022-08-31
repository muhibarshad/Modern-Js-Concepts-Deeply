'use strict';

//Don't stop the execuation actually it display the function after such time

setTimeout((name)=>console.log(`Hy! How are you ${name} my best friend 😍`),3*1000,'Muhib');
console.log('Loading......');

//To stop the setTimeout (clearTimeout)
const have=['pencil' ,'pen'];
const time=setTimeout((n1,n2)=>console.log(`Are you have ${n1} or ${n2} ?`),2*1000,...have);

if(have.includes('pencil'))
    clearTimeout(time);

//SetInterval
setInterval(()=>{
    const date=new Date();
    console.log(date);
},1*1000);

//Making Digitial Clock
setInterval(()=>{
    const now=new Date();
    const local=navigator.local;
    const optoins={
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
    }
    const formatedDate=Intl.DateTimeFormat(local,optoins).format(now);
    console.log(formatedDate);
},1*1000);
// setInterval(()=>console.clear(),2*1000);