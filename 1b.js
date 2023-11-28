//Get all the countries with a population of less than 2 lakhs using Filter function


var req2=new XMLHttpRequest();
req2.open("GET","https://restcountries.com/v2/all");
req2.send();
req2.onload=function(){
    var result=JSON.parse(req2.response);

 var con=result.filter((a)=>a.population<200000);
 console.log(con);
}