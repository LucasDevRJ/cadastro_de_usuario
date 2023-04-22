function cadastrarUsuario() {
	var campoNome = document.getElementById("nome");
	var campoSobrenome = document.getElementById("sobrenome");
	var campoData = document.getElementById("data");
	var campoSenha = document.getElementById("senha");

	var generos = document.getElementsByName("genero");

	for (var i = 0; i < generos.length; i++) {
		if (generos[i].checked == true) {
			if (generos[i].value == "masculino") {
				var genero = "Masculino";
			} else if (generos[i].value == "feminino") {
				var genero = "Feminino";
			} else if (generos[i].value == "outros") {
				var genero = "Outros";
			}
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

	console.log(usuario);
}

var botao = document.querySelector("button");
botao.onclick = cadastrarUsuario;