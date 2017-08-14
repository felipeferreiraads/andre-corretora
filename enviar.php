<?php
	/* apenas dispara o envio do formulário caso exista $_POST['enviarFormulario']*/
	if (isset($_POST['enviarFormulario'])){
	 
		/*** INÍCIO - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/
		 
		$enviaFormularioParaNome = 'Base Soluções';
		$enviaFormularioParaEmail = 'fabricio.ferraz@ghfly.com.br';
		 
		$caixaPostalServidorNome = 'WebSite | Formulário';
		$caixaPostalServidorEmail = 'no-reply@basesolucoes.com.br';
		$caixaPostalServidorSenha = 'gh123fly456';

		 
		/*** FIM - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/ 
		 
		 
		/* abaixo as veriaveis principais, que devem conter em seu formulario*/

		$mensagem = "Nome: " . $_POST['nome'];
		$mensagem .= "<br/>";
		$mensagem .= "E-mail: " . $_POST['email'];
		$mensagem .= "<br/>";
		$mensagem .= "Telefone: " . $_POST['telefone'];
		$mensagem .= "<br/>";
		$mensagem .= "Data e Hora do Agendamento: " . $_POST['data_hora'];
		$mensagem .= "<br/>";
		$mensagem .= "Unidade: " . $_POST['unidade'];

		$assunto = "Novo agendamento via site";
		
		
		 
		/*********************************** A PARTIR DAQUI NAO ALTERAR ************************************/ 
		 
		require_once('PHPMailer/PHPMailerAutoload.php');
		 
		$mail = new PHPMailer();
		 
		$mail->IsSMTP();
		$mail->SMTPAuth  = true;
		$mail->Charset   = 'utf8_decode()';
		$mail->Host  = 'smtp.'.substr(strstr($caixaPostalServidorEmail, '@'), 1);
		$mail->Port  = '587';
		$mail->Username  = $caixaPostalServidorEmail;
		$mail->Password  = $caixaPostalServidorSenha;
		$mail->From  = $caixaPostalServidorEmail;
		$mail->FromName  = utf8_decode($caixaPostalServidorNome);
		$mail->IsHTML(true);
		$mail->Subject  = utf8_decode($assunto);
		$mail->Body  = utf8_decode($mensagem);
		 
		$mail->AddAddress($enviaFormularioParaEmail,utf8_decode($enviaFormularioParaNome));
		 
		if(!$mail->Send()){

		}else{
			$pagina = "agradecimento.html"; //passando a hash assim vai bugar lá a função movesite e vai cair direto na parte de contato, sem fazer a animação de correr a página.
			header("location:$pagina");
		} 
	}
?>
