'use strict';

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

//ISo language code table