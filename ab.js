function lol() {

	var couleur = document.getElementById('demo').style.color;
	if (couleur == "blue"){
		document.getElementById('demo').style.color = "red";
	}
	else{
		document.getElementById('demo').style.color = "blue";
	}
	console.log(couleur);
}
