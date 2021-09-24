//import express
const express = require("express");

const app = express();
const port = 3000;

//serves static resources from public folder
app.use(express.static("publicFolder"));


//computer which is now acting as a server will listen for incoming requests from port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
});

//Create an endpoint to listen for GET requests with the path /flipcoin.

//should randomly respond with texts heads or tails
app.get("/flipcoin", (req, res) => {
    
    let flip = Math.random() * 2;
    let floor = Math.floor(flip)
    if(floor === 0){
        res.send("Head");
    }else if(floor === 1){
        res.send("Tails");
    };
});

