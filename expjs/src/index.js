const path=require('path')
const express = require('express');
const app = express();
const staticPath=path.join(__dirname,"./public");
const templatePath=path.join(__dirname,"./templates/views");
console.log(staticPath);
app.set("view engine","hbs");
app.set("views",templatePath);
app.get("/",(req,res)=>{
		res.render('index.hbs');
	})
app.get("/about",(req,res)=>{
		res.render('about');
	})


//app.use(express.static(staticPath));


app.get('',(req,res)=>{
		res.render('index.hbs');
	})
app.get("/",(req,res)=>{
			res.send("hello form backend")
	});
app.get("/about",(req,res)=>{
		res.render("about");
	})
app.listen(8090,()=>{
		console.log("listening at port 8080")
	});
//home/dhruv/Desktop/website1
