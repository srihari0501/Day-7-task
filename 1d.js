//Print the total population of countries using reduce function

var req4=new XMLHttpRequest();
req4.open("GET","https://restcountries.com/v2/all");
req4.send();
req4.onload=function(){
    var result=JSON.parse(req4.response);
    var totalPopulation = result.reduce((acc, country) => acc + country.population, 0);

    console.log("Total population of countries:", totalPopulation);
    
}







//restcountries api link - less than 1lakh population