
//Making Digitial Clock
setInterval(() => {
  const now = new Date();
  const local = navigator.local;
  const optoins = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formatedDate = Intl.DateTimeFormat(local, optoins).format(now);
  console.log(formatedDate);
}, 1 * 1000);

