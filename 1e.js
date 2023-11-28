//Print the country that uses US dollars as currency.


var req5=new XMLHttpRequest();
req5.open("GET","https://restcountries.com/v2/all");
req5.send();
req5.onload=function(){
    var result=JSON.parse(req5.response);


 var output = result.filter((country) => {
    return country.currencies && country.currencies.map((currency) => currency.code).includes("USD");
});

console.log(output);
}