<?php 
	include("class.phpmailer.php");

	$Name = $_POST['c_name'];
	$Email = $_POST['c_email'];
	$Message = $_POST['message'];

	$mail = new PHPMailer();  //建立物件
	$mail->IsSMTP();  //使用SMTP方式寄信
	$mail->SMTPAuth = true;  //設定SMTP驗證
	$mail->SMTPSecure = "tls";   //Gmail的SMTP主機需要使用TLS連線。經測試用SSL連線會失敗。
	$mail->Host = "smtp.gmail.com";  // Gmail的SMTP主機需要使用SSL連線
	$mail->Port = 587;  //Gamil的SMTP主機的SMTP埠位為587埠。經測試用465埠會失敗
	$mail->CharSet = "utf-8";  //編碼

	$mail->Username = "myaccount@gmail.com"; //Gamil帳號
	$mail->Password = "mypassword"; //Gmail密碼

	$mail->Form = $Email;  //寄件者信箱
	$mail->FormName = $Name;  //寄件者姓名
	$mail->Subject = "線上來信";  //郵件標題
	$mail->Body =  $Message;  //郵件內容

	$mail->IsHTML(true);  //郵件內容為html ( true || false)
	$mail->AddAddress("myaccount@gmail.com"); //收件者郵件及名稱

	if(!$mail->Send()){
		echo "發送錯誤" . $mail->ErrorInfo;
	}else{
		echo "發送成功";
	}

?>