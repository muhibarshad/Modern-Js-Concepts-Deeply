'use strict';
//ISo language code table->for the language and country

//Formatting date and time
const options={
  year:'numeric',
  month:'long',
  weekday:'long',
  day:'numeric',
  hour:'numeric',
  minute:'numeric',
};

const nowDate=new Date();
const local=navigator.local;//To get the local ISO language code
const formatDate=Intl.DateTimeFormat('ur-PK',options).format(nowDate);
console.log(formatDate);

//formatting numbers
const amount=234567.89;
const option={
  style:'currency',//unit,currency,percen
  currency:'USD',
};
console.log(new Intl.NumberFormat('en-UK',option).format(amount));

