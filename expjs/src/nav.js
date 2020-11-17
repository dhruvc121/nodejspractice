const express=require('express');
const app=express();

app.get("/",(req,res)=>{
		res.send("");
	})
app.get("/about",(req,res)=>{
		res.send("welcome to about page");
	})
app.get("/contact",(req,res)=>{
		res.send("welcome to contact page");
	})
app.listen(8080,()=>{
		console.log("listening at port 8080");
	})
