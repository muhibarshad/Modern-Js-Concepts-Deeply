//==========================================
/*The for Of loop is basically the way of iterating the arrays in a very better wat 
arr.enteris() is a method is which the we get the every element has a separate arary with its index (size=2)
destrcuture the item varaible means we have an access to the every index element of the arr.entreries
//basic syntax
 for(DataType iterateVaraible of arrayName.method())
*/
//==========================================

let shop={
    name:'Al madinah kilath house',
    catagerious:['Gents','Child','female','Readymade'],
    shopNo:33,
    location:'Near the imran khan chowk',
    openingHours:{
      Mon:{
          open:'10:00 AM',
          close:'11:00 PM'
      },
      Tue:{
          open:'10:00 AM',
          close:'11:00 PM'
      },
      wed:{
          open:'10:00 AM',
          close:'11:00 PM'
      }
    },
    restOrder:function(first,...second){
      console.log(first);
      console.log(second);
    }
  };

//basic
let menu=[...shop.catagerious];
for(const item of menu)
console.log(item);

//enteries method
for(const item of menu.entries()){
    console.log(item);
}

//enteries explain
console.log(menu.entries());
console.log([menu.entries()]);
console.log([...menu.entries()]);

//More explain
for (const item of menu.entries()){
    console.log(`${item[0]+1} : ${item[1]}`);
}

//better_way 
for(const [i,el] of menu.entries()){
    console.log(`${i+1} :${el}`);
}

