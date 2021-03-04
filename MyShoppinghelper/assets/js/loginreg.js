function check(form){
	// Hier checken wir dann eure Response und brauchen dann von euch ein True oder false
	
    if(123=123){ //hier if (response == "true") dann weiterleitung zum Dashboard
        window.open(href="main.html")    
        window.close(href="login.html")
    }else{ // else if (response == "false")
        return type="error";   
    }
}

function goBack(){
    window.history.back();
}

function goToRole(){
    a.href="role.html"
}

function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message error"); 
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#Login");
    const CreateAccountForm = document.querySelector("#CreateAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.add("form--hidden");
        CreateAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
    });

    LoginForm.addEventListener("submit", e => { // hier würden wir euch eigentlich die Form übergeben wollen. Wie ihr das dann macht, ist jz bei euch
        e.preventDefault();

        // AJAX/Fetch Login

        setFormMessage(LoginForm, "Fehler", "Ungueltige Kombination E-Mail und Passwort");    
    });
    
    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    })
});

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "SignUpPasswort" && e.target.value.length > -1 && e.target.value.length < 8){
                setInputError(inputElement, "Passwort muss mindestens 8 Zeichen lang sein");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            var password = document.querySelector('.form__passwort').value,
                confirmPassword = document.querySelector('.form__bestätigen').value;

            if(e.target.id === "SignUpBestätigen" && password != confirmPassword){
                setInputError(inputElement, "Passwoerter muessen übereinstimmen");
            }
        });   
    });

