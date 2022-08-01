const getPrimes = () => {

  // set your lower and upper range to display prime Numbers 
  var Lnum = 0; 
  var Hnum = 100;

  console.log(" Prime Numbers between " + Lnum + " and " + Hnum + " are : " )
     for(var n=2; n<=Hnum; n++)
     {
            var i=2;
            var count = 0;
            while(i<=n/2)
            {
                if(n%i==0)
                {
                    count++;
                    break;
                }
                i++;
            }
            if(count==0)
                console.log(n);
     }
};

getPrimes();
/*Citation https://eloquentjavascript.net/ */