(
	function(exports,require,module,__filename,__dirname){
			
		}
);// <- module wrapper function

//normal code
const name="dhruv";
console.log(name);
console.log(__dirname);
console.log(__filename);
// behind the scences the code is moved to module wrapper finction
//below is the transformed code
//(
	//function(exports,require,module,__filename,__dirname){
			//const name="dhruv";
			//console.log(name);
		//}
//);
//exports, module, and require are by default local to every file
//this is the concept of IIFE: immediately invoked function expression
