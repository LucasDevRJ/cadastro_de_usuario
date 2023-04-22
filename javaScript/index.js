function cadastrarUsuario() {
	var campoNome = document.getElementById("nome");
	var campoSobrenome = document.getElementById("sobrenome");
	var campoData = document.getElementById("data");
	var campoSenha = document.getElementById("senha");

	var generos = document.getElementsByName("genero");

	for (var i = 0; generos.length; i++) {
		if (generos[i].checked) {
			console.log("Gênero = " + generos[i].value);
		}
	}

	var nome = campoNome.value;
	var sobrenome = campoSobrenome.value;
	var data = campoData.value;
	var senha = campoSenha.value;

	var usuario = {
		nome : nome,
		sobrenome : sobrenome,
		data : data,
		genero : genero,
		senha : senha
	}
}

var botao = document.querySelector("button");
botao.onclick = cadastrarUsuario;