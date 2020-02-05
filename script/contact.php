$name = $_POST['name'];
     $surname = $_POST['surname'];
     $emailFrom = $_POST['email'];
     $comment = $_POST['comment'];

     $subject = 'Website Apneacanarias.com ';
     $headers = "From: ".$emailFrom;
     $txt = "You have received an e-mail from: ".$name. " " .$surname." With email: ".$emailFrom ."\n\n";
     $txt .=      "Comment: ".$comment;
     $headers .= "MIME-Version: Formulario de ApneaCanarias\r\n";
     $headers .= "MIME-Version: 1.0\r\n"; 
     $headers .= "Content-type: text/plain; charset=utf-8\r\n"; 

    //mail('mariajalbisu@gmail.com', $subject, $txt, $headers);
    mail('vero@jakas.one', $subject, $txt, $headers);
    header('location: /apneacanarias/index.html');
        
    }
    else {
        header('location: /apneacanarias/contact-tenerife.html'); //if it was not send succesfully it redirects to the contact page again
        exit(0);
    }