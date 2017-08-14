$(document).ready(function () {
	$('input[name=telefone]').mask('(00) 000000000');
    
	$("form").on("submit", function() {
		var nome = $(this).find("input[name=nome]").val();
		var email = $(this).find("input[name=email]").val();
		var telefone = $(this).find("input[name=telefone]").val();
		var servico = $(this).find('select[name=servico]').val();
		var mensagem = $(this).find('textarea').val();
		var testEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		if(nome == "") {
			$("input[name=nome]").addClass('input-error');
		}
		if(email == "" || !testEmail.test(email)) {
			$("input[name=email]").addClass('input-error');
		}
		if(telefone == "" || telefone.length < 13) {
			$("input[name=telefone]").addClass('input-error');
		}
		if(servico == "") {
			$("select[name=servico]").addClass('input-error');
		}
		if(mensagem == "") {
			$("textarea").addClass('input-error');
		}

		if(nome == "" || email == "" || !testEmail.test(email) || telefone == "" || telefone.lenght < 13 || servico == "" || mensagem == "") {			
			return false;
		}
	});

	$("input[name=nome]").on("blur", function() { 
		var nome = $("form").find("input[name=nome]").val();
		if(nome != "") {
			$("input[name=nome]").removeClass('input-error');
		}	
	});

	$("input[name=email]").on("blur", function() {
		var email = $("form").find("input[name=email]").val();
		if(email != "") {
			$("input[name=email]").removeClass('input-error');
		}
	});

	$("input[name=telefone]").on("blur", function() {
		var telefone = $("form").find("input[name=telefone]").val();
		if(telefone != "") {
			$("input[name=telefone]").removeClass('input-error');
		}
	});

	$("select[name=servico]").on("blur", function() {
		var servico = $("form").find("select[name=servico]").val();
		if(servico != "") {
			$("select[name=servico]").removeClass('input-error');
		}
	});

	$("textarea").on("blur", function() {
		var mensagem = $("form").find("textarea").val();
		if(mensagem != "") {
			$("mensagem").removeClass('input-error');
		}
	});
});