const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
		if(req.url=='/'){
		res.end("hello this is homepage");
	}else if(req.url=='/about'){
		res.end("hello this is something about us");
	}else if(req.url=='/contact'){
		res.end("hello this is contact us ");
	}else{
		res.writeHead(404); 
		res.end("page does not exist")
	}
	})
server.listen(8000,"127.0.0.1",()=>{
		console.log("server listening");
	});
