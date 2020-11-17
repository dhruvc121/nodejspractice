const bioData={
		name:"Dhruv",
		age:20,
		email:"dhruvc121@gmail.com"
	}
	
const jsonData=JSON.stringify(bioData);//convert object to json
const bioData=JSON.parse(jsonData);//convert json to object
console.log(jsonData)
