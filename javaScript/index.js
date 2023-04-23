function cadastrarUsuario() {
	var campoNome = document.getElementById("nome");
	var campoSobrenome = document.getElementById("sobrenome");
	var campoData = document.getElementById("data");
	var campoSenha = document.getElementById("senha");
	var divisaoUsuario = document.getElementById("usuario");

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

	var divisaoUsuarioFilho = document.createElement("div");

	var paragrafoNome = document.createElement("p");
	var nome = document.createTextNode("Nome: " + usuario.nome);

	var paragrafoSobrenome = document.createElement("p");
	var sobrenome = document.createTextNode("Sobrenome: " + usuario.sobrenome);

	var paragrafoData = document.createElement("p");
	var data = document.createTextNode("Data: " + usuario.data);

	var paragrafoGenero = document.createElement("p");
	var genero = document.createTextNode("Gênero: " + usuario.genero);

	var paragrafoSenha = document.createElement("p");
	var senha = document.createTextNode("Senha: " + usuario.senha);

	paragrafoNome.appendChild(nome);
	paragrafoSobrenome.appendChild(sobrenome);
	paragrafoData.appendChild(data);
	paragrafoGenero.appendChild(genero);
	paragrafoSenha.appendChild(senha);

	divisaoUsuarioFilho.appendChild(paragrafoNome);
	divisaoUsuarioFilho.appendChild(paragrafoSobrenome);
	divisaoUsuarioFilho.appendChild(paragrafoData);
	divisaoUsuarioFilho.appendChild(paragrafoGenero);
	divisaoUsuarioFilho.appendChild(paragrafoSenha);

	divisaoUsuarioFilho.style.border = "solid 2px #40E0D0";
	divisaoUsuarioFilho.style.padding = "20px";
	divisaoUsuarioFilho.style.margin = "20px";

	divisaoUsuario.appendChild(divisaoUsuarioFilho);

	console.log(usuario);

	divisaoUsuarioFilho.onmouseover = function teste() {
		divisaoUsuarioFilho.style.transform = "scale(1.2)";
	}

	divisaoUsuarioFilho.onmouseout = function teste() {
		divisaoUsuarioFilho.style.transform = "scale(1.0)";
	}
}

var botao = document.querySelector("button");
botao.onclick = cadastrarUsuario;