const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
	 //regular method
	 //let fs=require('fs');
	 //fs.readFile('input.txt',(err,data)=>{
		 //if (err) return console.error(err);
		 //res.end(data.toString()); 
		 //})
		 const rstream=fs.createReadStream("input.txt");
		 //using streams
		 //rstream.on('data',(chunkdata)=>{
			 //res.write(chunkdata)
			 //})
		//rstream.on('end',()=>{
				//res.end();
			//})
		//using pipe stream
		rstream.pipe(res);
	})
	
server.listen(8000,'127.0.0.1');
