let arr = [1,2,3,4];
let output = document.getElementById("output");

function promise1(){
return new Promise((resolve)=>{
	setTimeout(()=>{
		const newArr = arr.filter(n=>n%2==0) 
		resolve(newArr)
	},1000)
})
}
function promise2(){
return new Promise((resolve)=>{
	setTimeout(()=>{
		const Newarr = arr.map(n=>n*2) 
		resolve(Newarr)
	},3000)
})
}
async function runPromises() {
    const res1 = await promise1();
    output.innerHTML = `Promise 1: ${res1}`;

    const res2 = await promise2();
    output.innerHTML += `<br>Promise 2: ${res2}`;
}

runPromises();