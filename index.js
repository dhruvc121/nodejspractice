const fs=require('fs');

//========================Synchronus=======================
//fs.mkdirSync('dhruv');
//fs.appendFileSync('Dhruv/bio.txt','and i am 20 years old');
//const fileData=fs.readFileSync('Dhruv/bio.txt','utf-8');
//console.log(fileData);
//fs.unlinkSync('Dhruv/mybio.txt');
//fs.rmdirSync('Dhruv');
//======================Asynchronus=============================

//fs.writeFile('read.txt','first asynchronous file',()=>{
		//console.log('file created')
	//});
//fs.appendFile('read.txt','this text is appended',()=>{
		//console.log('append complete');
	//})
//fs.readFile('read.txt','utf-8',(err,data)=>{
		//console.log(data)
		//console.log("file read complete");
	//})
//===============CRUD operatons in asynchrounus===================
//fs.mkdir('Dhruv',()=>{
		//console.log('folder created')
	//})
//fs.writeFile('Dhruv/bio.txt','first challenge in async',()=>{
		//console.log('file created');
	//})
//fs.appendFile('Dhruv/bio.txt',' first append',()=>{
		//console.log('file appended');
	//})
//fs.readFile('Dhruv/bio.txt','utf-8',(err,data)=>{
		//console.log(data);
		//console.log('file read');
	//})
//fs.rename('Dhruv/bio.txt','Dhruv/myBio.txt',()=>{
		//console.log('file renamed');
	//})
//fs.unlink('Dhruv/bio.txt',()=>{
		//console.log('file deleted');
	//})
//fs.rmdir('Dhruv',()=>{
		//console.log("directory removed")
	//});
