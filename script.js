//your JS code here. If required.
const vote=new Promise((resolve, reject)=>{
	if (age>18) {
		resolve: you can vote
	}else{
		reject: you cant vote
	}
})

.then((message)=>{
	console.log(`Welcome, ${name}. You can vote`)
})
.catch((error)=>{
	console.log(`Oh sorry ${name}. You aren't old enough`)
})






