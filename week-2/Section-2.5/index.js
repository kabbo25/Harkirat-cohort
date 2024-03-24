const express = require('express');

function cal(n){
    return n*(n+1)/2;
}

const app=express();

app.get('/',(req,res)=>{
    const n=parseInt(req.query.n);
    const ans=cal(n);
    res.send(`Sum of 1 to ${n} is ${ans}`);
})

app.listen(3000);