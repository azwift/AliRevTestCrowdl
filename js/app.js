	window.addEventListener("load", init);

	function init(){
		let close = document.getElementById("close");
		if(close)
			close.addEventListener("click", handleClose);

		let privacy = document.getElementById("privacy");
		if(privacy)
			privacy.addEventListener("click", handlePrivacy);

		let fninput = document.getElementById("fname");
		if(fninput)
			fninput.addEventListener("input", handleShadow);

		let eminput = document.getElementById("email");
		if(eminput)
			eminput.addEventListener("input", handleShadow);

		let logo = document.getElementById("logo");
		if(logo) // logo goes to the homepage
			logo.addEventListener("click",handleClose);


	}

	function handleClose(event){
		let pagename = document.getElementById("index");
		if(!pagename)
			window.location.href = "../index.html";
	}

	function handlePrivacy(event){
		let pagename = document.getElementById("index");

		if(pagename)
			window.location.href = "./html/privacy.html";
		else 
			window.location.href = "./privacy.html";
	}

	function handleShadow(event){
		if(event.target.value !== ""){
			if(event.target.id === "fname")
				$("#shadow-fn")[0].classList.add("remove-shadow");
			else if(event.target.id === "email")
				$("#shadow-em")[0].classList.add("remove-shadow");
		}
		else{
			if(event.target.id === "fname")
				$("#shadow-fn")[0].classList.remove("remove-shadow");
			else if(event.target.id === "email")
				$("#shadow-em")[0].classList.remove("remove-shadow");
		}
	}
	