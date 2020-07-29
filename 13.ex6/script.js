function CheckPassword(inputtxt) 
{ 

var decimal = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
if(inputtxt.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 

console.log(CheckPassword("123ABbba!"));