const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extend: false }));
app.use(express.static(path.join(__dirname,"public")));

app.post("/api/v1/quiz", function (req, res) {
    const answer= req.body.answer;

    if(answer==="2" ){
    //    res.send("<h1>正解！</h1>")
    res.redirect("/correct.html");

    }else{
    //    res.send("<h1>不正解！！</h1>")
    res.redirect("/wrong.html");
    }
    res.send(answer);
});
  
app.listen(3000, function(){
    console.log("I am running!")
});