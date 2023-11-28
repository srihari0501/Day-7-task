//Get all the countries from Asia continent /region using Filter function

var req1=new XMLHttpRequest();
req1.open("GET","https://restcountries.com/v2/all");
req1.send();
req1.onload=function(){
    var result=JSON.parse(req1.response);
 //  console.log(result);
 var con=result.filter((a)=>a.region=="Asia");
 console.log(con);
}