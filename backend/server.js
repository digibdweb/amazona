import express from 'express';


const app=express();
const port= process.env.PORT || 5000;

app.get('/',(req,res)=> {
    res.send("server is ready");
});

app.listen(port,console.log(`serverd at http://localhost:${port}`));
