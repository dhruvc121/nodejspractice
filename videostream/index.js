const express=require('express');
const app=express();
const fs=require('fs');
app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/index.html");
	})
	
app.get("/video",(req,res)=>{
	const range=req.headers.range;
	if(!range){
		res.status(400).send("Require range header");
		}
	
	const videoPath="video1.mp4";
	const videoSize=fs.statSync("video1.mp4").size;
	const chunckSize= 10 ** 6;
	const start=Number(range.replace(/\D/g,""));
	const end=Math.min(start+chunckSize,videoSize-1);
	const contentLenght=end-start+1;
	const headers={
			"Content-Range":`bytes ${start}-${end}/${videoSize}`,
			"Accept-Range":"bytes",
			"Content-Length":contentLenght,
			"Content-Type":"video/mp4",
		};
		res.writeHead(206,headers);
		const videoStream=fs.createReadStream(videoPath,{start,end});
		videoStream.pipe(res);
		
	})
	
app.listen(8000,()=>{
	console.log("server listening at port 8000")
	})
