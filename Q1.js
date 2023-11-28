var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload = function(){
    var result=JSON.parse(req.response);
    console.log(result);
    
}





