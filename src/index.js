import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const express=require ("express");
const app=express();
const port=8000;

app.get("/",(req,res)=>{
    res.send("hello from express server")
})

app.listen(port,()=>{
    console.log('listening to port $ {port}')
})
