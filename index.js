function isValidate(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("firstname").value;
    let email = document.getElementById("firstname").value;
    let phone = document.getElementById("firstname").value;
    let state = document.getElementById("firstname").value;
    let zipcode = document.getElementById("firstname").value;

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
    if(email == '' || !email.includes('@') || email.startswith('@')){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"

    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
    }
    if(email == ''){
        document.getElementById("emailInvalid").style.display = "block"
        document.getElementById("emailValid").style.display = "none"

    }
    else{
        document.getElementById("emailValid").style.display = "block";
        document.getElementById("emailInvalid").style.display = "none";
    }
}
