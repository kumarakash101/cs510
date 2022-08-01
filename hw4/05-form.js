let form = document.querySelector('form');

//form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {

  const form = new FormData(e.target);
  var uname = form.get("uname");

  var email = form.get("email");

  var password = form.get("password");

  var signUp = form.get("signUp");

  var date = form.get("date");

     
      if (uname == "" || uname == null ) 
      {  
        if( email == "" || email == null )
        {
          if( password == "" || password == null )
          {
            if( signUp == "" || signUp == null )
            { 
              if( date == "" || date == null) 
              {
                console.warn("You must enter some data to submit this form");
                return false;
              }
            }
          }
        }
      }    
      
  console.log("************Form Submission******************");
  
  if(uname == "" || uname == null ) 
  {
    console.log("Username: No Submission");  
  }
  else
  {
    console.log("Username: "+ uname);
  }

   if(email == "" || email == null ) 
  { 
    console.log("Email: No Submission");
  }
  else
  {
    console.log("Email: "+ email);
  }

  if(signUp == "" || signUp == null ) 
  { 
    console.log("Newsletter: No Submission");
  }
  else
  {
    console.log("Newsletter: "+signUp);
  }

  if(date == "" || date == null ) 
  { 
    console.log("Date: No Submission");
  }
  else
  {
    console.log("Date: "+date);
  }
  return false;
  
}

/*Citation https://eloquentjavascript.net/ */