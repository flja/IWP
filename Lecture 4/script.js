let s = document.getElementById("button1");

s.addEventListener("mouseenter",() => {
	fetch('http://localhost:5000/log', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({user:"Hej"}),
	}).then(()=> {console.log("Ok")}).catch(()=>{console.log("Failed")})
})