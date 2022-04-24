function isValidate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phoneno").value;
    let state = document.getElementById("state").value;
    let zipcode = document.getElementById("zipcode").value;
    let invalidCheck = document.getElementById("invalidCheck").value;

    if(firstName == ''){
        document.getElementById("firstNameInvalid").style.display = "block"
        document.getElementById("firstNameValid").style.display = "none"

    }
    else{
        document.getElementById("firstNameValid").style.display = "block";
        document.getElementById("firstNameInvalid").style.display = "none";
    }
    if(lastName == ''){
        document.getElementById("lastNameInvalid").style.display = "block"
        document.getElementById("lastNameValid").style.display = "none"

    }
    else{
        document.getElementById("lastNameValid").style.display = "block";
        document.getElementById("lastNameInvalid").style.display = "none";
    }
    if(email == '' || !email.includes('@') || !email.includes('.') ||email.startsWith('@') || email.indexOf("@")> email.indexOf(".")){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"

    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
    }
    if(phone  == ''|| phone.length < 10 || phone.length >10){
        document.getElementById("phoneInvalid").style.display = "block"
        document.getElementById("phoneValid").style.display = "none"

    }
    else{
        document.getElementById("phoneValid").style.display = "block";
        document.getElementById("phoneInvalid").style.display = "none";
    }
    if(state == ''){
        document.getElementById("stateInvalid").style.display = "block"
        document.getElementById("stateValid").style.display = "none"

    }
    else{
        document.getElementById("stateValid").style.display = "block";
        document.getElementById("stateInvalid").style.display = "none";
    }
    if(zipcode  == ''|| zipcode.length < 6 ){
        document.getElementById("zipInvalid").style.display = "block"
        document.getElementById("zipValid").style.display = "none"

    }
    else{
        document.getElementById("zipValid").style.display = "block";
        document.getElementById("zipInvalid").style.display = "none";
    }
    if(  invalidCheck == ''  ){
        document.getElementsByClassName("Invalid-feedback").style.display = "block"
        

    }
    
}
