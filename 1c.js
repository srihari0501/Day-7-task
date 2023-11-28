//Print the following details name, capital, flag, using forEach function
var req3=new XMLHttpRequest();
req3.open("GET","https://restcountries.com/v2/all");
req3.send();
req3.onload=function(){
    var result=JSON.parse(req3.response);

 result.forEach((a)=>console.log ("name : " +a.name));
 result.forEach((a1)=>console.log ("capital : " +a1.capital));
result.forEach((a2)=>console.log ("flag : " +a2.flag));
    
}
