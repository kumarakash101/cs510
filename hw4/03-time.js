const calculateTime = (date1, date2) => {
  
  var d1 = new Date(date1);

  var d2 = new Date(date2);

 var diffTime = Math.abs(Date.UTC(d2.getFullYear(),d2.getMonth(),d2.getDate()) - Date.UTC(d1.getFullYear(),d1.getMonth(),d1.getDate()));

 var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
 var years = parseInt(diffDays/365);

 var days = diffDays%365;
 
 var months = parseInt(days/31);

 var str='Time elapsed: ';

 if(years>0)
    str = str + years+" years ";
 str = str + months +" months";

 if(isNaN(months))
    str = 'Error: Invalid input provided';

 return str;
}




console.log(calculateTime(1635176171332, 'May 1, 1995'));

console.log(calculateTime(1635176171332, '1975-8-11'));

console.log(calculateTime(1635176171332, [2021, 5, 23]));

console.log(calculateTime(1635176171332, 1031814000000));

console.log(calculateTime(1635176171332, 'birthdate'));


console.log(calculateTime('2022-05-02', '1975-8-11'));


/*Citation https://eloquentjavascript.net/ */