let s = document.getElementById("button1");
let i = 1;
s.addEventListener("mouseenter",() => {
	fetch('http://localhost:5000/log', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({user:"Hej" + i}),
	})
	.then(()=> {console.log("Ok")})
	.catch(()=>{console.log("Failed")});
	console.log(i);
	i++;
});