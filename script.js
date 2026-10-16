let arr = [1,2,3,4];
let output = document.getElementById("output");

function promise1(){
new Promise((resolve)=>{
	setTimeout(()=>{
		const Newarr = arr.filter(n=>n%2==0) 
		output.innerHTML = `${Newarr}`
	},1000)
})
}
function promise2(){
new Promise((resolve)=>{
	setTimeout(()=>{
		const Newarr = arr.map(n=>n*2) 
		output.innerHTML = `${Newarr}`
	},3000)
})
}
