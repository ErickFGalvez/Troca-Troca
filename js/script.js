function trocar() {
	let imagem = document.getElementById("imagem");
	let trocar = Math.trunc (Math.random() * 10)+1;
	imagem.src = "img/img" + trocar+ ".jpg"
}