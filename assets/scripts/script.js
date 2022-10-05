elemSenha = document.querySelector("[data-Senha1]");
elemCpf = documento.querySelector("[data-Cpf")
elemMedidor = document.querySelector("[data-Medidor]");
var gerenciador;

window.onload=init; //a função init será chamada quando a janela for carregada

elemFormulario.onsubmit = () => {
	
	if (entradaValidada())
	{
		var elemNomeCompleto = document.querySelector("[data-nomeCompleto]");
		var elemEmail = document.querySelector("[data-Email]");
		var elemCpf = document.querySelector("input[name='cpf']:checked");
		var pessoa = new Pessoa(elemNomeCompleto.value,elemEmail.value,elemSenha.value,elemCpf.value);
		gerenciador.adicionar(pessoa);
		gerenciador.mostrarPessoasComoTabela(elemContainerTabela);
	}
	
	return false;
};

function init(){
	gerenciador = new gerenciadorPessoas();
	gerenciador.mostrarPessoasComoTabela(elemContainerTabela);
}
/*elemNomeCompleto = document.querySelector("[data-nomeCompleto]");
elemNomeCompleto.oninput = () => {
	if(!possuiTamanhoMinimo(elemNomeCompleto.value,8))
	{
		elemNomeCompleto.setCustomValidity("Nome completo deve possuir pelo menos 8 caracteres!");
	}
	else
	{
		elemNomeCompleto.setCustomValidity("");
	}
};*/


/*elemSenha.addEventListener("input",() => {
	calculaForcaSenha(elemSenha,elemMedidor);
});*/
elemSenha.oninput = () => {
	calculaForcaSenha(elemSenha,elemMedidor);
};

function calculaForcaSenha(senha, medidor) //parâmetros devem ser elementos html
{
	multiplicador = 0;
	
	//testa se o valor do elemento senha possui letras minúsculas
	if (/[a-z]/.test(senha.value)) {
		multiplicador++;
	}
	
	//testa se o valor do elemento senha possui letras maiúsculas
	if (/[A-Z]/.test(senha.value)) {
		multiplicador++;
	}
	//testa se o valor do elemento senha possui números
	if (/[0-9]/.test(senha.value)) {
		multiplicador++;
	}
	medidor.value = senha.value.length * multiplicador;
}

function possuiTamanhoMinimo(entrada, tamMinimo)
{
	if(entrada.length < tamMinimo) {
		return false;
	}
	else
	{
		return true;
	}
}

function entradaValidada()
{
	var elemNomeCompleto = document.querySelector("[data-nomeCompleto]");
	var senha1 = document.querySelector("[data-Senha1]");
	var senha2 = document.querySelector("[data-Senha2]");
	elemEspacoMensagem = document.querySelector("[data-Mensagens]");
	elemEspacoMensagem.innerHTML="";

	if (!possuiTamanhoMinimo(elemNomeCompleto.value,8))
	{
		elemEspacoMensagem.className="alert alert-danger";
		elemEspacoMensagem.innerHTML="<strong>Atenção!</strong>Nome deve possuir pelo menos 8 caracteres";


		return false;
	}
	if(!SenhaValida(senha1.value,senha2.value))
	{
		elemEspacoMensagem.className="alert alert-danger";
		elemEspacoMensagem.innerHTML="<strong>Atenção!</strong>Senha devem ser iguais";

		return false;
	}
	
}


function SenhaValida(senha1,senha2)
{
	if (senha1 == senha2)
    {
    	return true;
    }
    else
    {
		return false;
	}
}	
