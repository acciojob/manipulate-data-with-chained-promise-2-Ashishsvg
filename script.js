let arr = [1,2,3,4];
let output = document.getElementById("output");

const promise = new Promise((resolve)=>{
	setTimeout(()=>{
		const Newarr = arr.filter(n=>n%2==0) 
		output.innerHTML = `${Newarr}`
	},1000)
}).then((data)=>{
	setTimeout(()=>{data = data.map(n=>n*2)
	output.innerHTML = `${data}`},3000)
	
})
