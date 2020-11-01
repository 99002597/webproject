var check= ()=>{
    var username = document.myform.username.value.trim();
    var textarea = document.myform.textarea.value.trim();
    //var email = document.myform.email.value.trim();

    if(username ==""||(username.length<5)||(username.length>15)){
        alert("Invalid Name");
        document.myform.username.value="";
        document.myform.username.focus();
    }
    else if (username.match(/[1-9]/)){
        alert("Invalid Name");
        document.myform.username.value="";
        document.myform.username.focus();
    }
    else if (!username.match(/[A-Za-z]/)){
        alert("Invalid Name");
        document.myform.username.value="";
        document.myform.username.focus();
    }
   /*    else if (email.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/+/@[a-zA-Z0-9-]/+/(?:\.[a-zA-Z0-9-])/))
    {
        alert("You have entered an invalid email address!");
        document.myform.email.value="";
        document.myform.email.focus();
    } */
     if(textarea ==""){
        alert("Invalid Data");
        document.myform.textarea.value="";
        document.myform.textarea.focus();
    }
    
    else{
        alert("Thanks for the Feedback");
        document.myform.submit();
    }
        }	