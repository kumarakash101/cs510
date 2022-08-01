let result = [];

const insertItem = (item) => {
  console.log("Inserting " + item + " into array...")
  result.push(item);  
  
  return item;
};

const deleteItem = (item) => {
  var numsearch =0;
  console.log("Deleting " + item + " from array... ")
  for(var i=0; i<result.length; i++)
  {
    if(result[i]==item)
    {
     result.splice(i, 1); 
     numsearch = 1;
     break;
   }
 }
 if( numsearch == 1)
 {
  console.log("Deleted first occurance of " + item + " from array ... ")
}
else
{
  console.log("Item " + item +  " not found in array ... ")
}
return item;
};

const lookupItem = (index) => {
 
  console.log("Searching for index " + index + " in array..")
  if( index < 0 || index > result.length)
  {
    return "null";
  }
  else 
  {
    console.log("Search Item found at array[" + index + "] is ..");
    console.log(result[index]);
    var item1=result[index];
    var numsearch=0;

    

    for(var i=0; i<result.length; i++)
    {
      if(result[i]==item1)
      {
       result.splice(i, 1); 
       numsearch = 1;
       break;
     }
   }

   
   
 }
 

 
};

const printItems = () => {
  
  console.log("Printing array numbers : ")
  var str= '';
  str = result.join(",")
  
  return str;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());

console.log(lookupItem(1));

console.log(printItems());

deleteItem(1);
console.log(printItems());

console.log(lookupItem(2));

console.log(printItems());

deleteItem(-1);
console.log(lookupItem(-1));


insertItem(10);
insertItem(20);
insertItem(30);
insertItem(40);
insertItem(50);
console.log(printItems());

console.log(lookupItem(20));

console.log(printItems());

deleteItem(20);
console.log(printItems());

insertItem(20);
console.log(printItems());
/*Citation https://eloquentjavascript.net/ */