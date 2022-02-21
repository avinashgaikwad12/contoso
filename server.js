const express=require("express");
const app=express();

//My Page function 
const mypage=function(request,response){
    response.send(
        "<h1> Contoso Multi National Company</h1>"+
        "<h3> Comapny Information</h3>"+
        "<h3> 1. MultiNational Company</h3>"+
        "<h3> 2. 12 Offices World Wide</h3>"+
        "<h3> 3. Want to Deploy their Web Application</h3>"      
    )
}

// Url to access the Home Page
app.get("/",mypage);

//Connect the Server 
const port=8081;
var server=app.listen(port);
console.log(`Server is Running on ${port}`);
