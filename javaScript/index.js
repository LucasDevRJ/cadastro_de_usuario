function cadastrarUsuario() {
	var campoNome = document.getElementById("nome");
	var campoSobrenome = document.getElementById("sobrenome");

	var generos = document.getElementsByName("genero");

	for (var i = 0; generos.length; i++) {
		if (generos[i].checked) {
			console.log("Gênero = " + generos[i].value);
		}
	}
}