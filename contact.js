function validateForm(){
    let Name=document.forms["myName"]["Name"].value;
    let Email=document.forms["myName"]["Email"].value;
   

}

    if (Name=="")
    {
        alert("Name must be filled in");
        return false;
    }
    
    if (Email=="")
    {
        alert("Email should be filled in");
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf("."); 
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
            alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;
    }