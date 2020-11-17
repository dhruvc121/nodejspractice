const http=require('http');
const fs=require('fs');
var requests=require('requests');
const homeFile= fs.readFileSync('index.html','utf-8');
const replaceVal=(tempVal,orgVal)=>{
		let temprature=tempVal.replace("{%tempval%}",(orgVal.main.temp_min/10).toPrecision(4));
		temprature=temprature.replace("{%tempmin%}",(orgVal.main.temp_max/10).toPrecision(4));
		temprature=temprature.replace("{%tempmax%}",(orgVal.main.temp_max/10).toPrecision(4));
		temprature=temprature.replace("{%location%}",orgVal.name);
		temprature=temprature.replace("{%country%}",orgVal.sys.country);
		temprature=temprature.replace("{%weatherStatus%}",orgVal.weather[0].main);
		return temprature;
	}
const prompt = require('prompt-sync')();
const city_name = prompt('What is your city name?');
const server=http.createServer((req,res)=>{
		if(req.url=="/"){
				requests(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=f821c4b1f0ea1d1d5355bc0b2c4318ab`
				)
				.on('data', (chunk)=> {
				const jsondata= JSON.parse(chunk);
				const objdata=[jsondata];
				const realTimeData= objdata.map((val)=>replaceVal(homeFile,val)).join("");
					console.log(realTimeData);
					res.write(realTimeData);
				})
				.on('end', (err)=> {
				if (err) return console.log('connection closed due to errors', err);
				res.end();
				});
			}
	})
server.listen(8080,"127.0.0.1");
