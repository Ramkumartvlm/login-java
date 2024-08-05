const UserName=document.getElementById("UserName");
const password=document.getElementById("password");
const success=document.getElementById("val");
const error=document.getElementById("error");

function login()
{
    
    if(UserName.value == "Entri Elevate",password.value == "admin123")
    {
         success.innerText="Login successful";
    }
    else
    {
        error.innerText="incorrect User name and password";
    }
   
}

function  forgotpass()
{
    prompt("Enter your email");
    alert("Verification code sent to your email");
}

