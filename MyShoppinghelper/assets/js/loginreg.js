function check(form){
    if((form.LoginUser.value == "TestUser01" || form.LoginUser.value == "test.user01@ticketpin.de") && form.LoginPasswort.value == "testpasswort"){
        window.open(href="role.html")    
        window.close(href="TicketPin.html")
    }else{
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

    LoginForm.addEventListener("submit", e => {
         e.preventDefault();

        // AJAX/Fetch Login

        setFormMessage(LoginForm, "Fehler", "Ungueltige Kombination E-Mail und Passwort");    
    });

   document.querySelectorAll(".form__input").forEach(inputElement => {
       inputElement.addEventListener("blur", e => {
           if (e.target.id === "SignUpUsername" && e.target.value.length > -1 && e.target.value.length < 8){
               setInputError(inputElement, "Username muss mindestens 8 Zeichen lang sein");
           }
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
                setInputError(inputElement, "Passwörter muss übereinstimmen");
            }
        });   
    });
    
});

//Ab hier neue Funktionen von Maxime:

//Chat Funktionen:
//Funktion zum öffnen des Chat-Fensters
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
//Funktion zum schließen des Chat-Fensters  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
//Funktion Snackbar beim Absenden und Rücksetzung des Textareainhalt  
  function openSendMsg(element) {
      element.value = '';
//holen von snackbar div per ID
var x = document.getElementById("snackbar");
//Ausblenden nach 3 Sekunden
x.className = "show";
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//Funktionen für Ticketauflisten - Suche nach Ticketnummer:
function myFunction() {
    // Variablen
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Schleife durch Zeilen, verstecken von allen die nicht übereinstimmen
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  //Suche nach Ticket Betreff (kopie von oben nur anderer Suchindex)
  function myFunction2() {
    // Variablen
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Schleife durch Zeilen, verstecken von allen die nicht übereinstimmen
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  //Funktion fürs Sortieren der Tabellenspalten
  function sortTable(n) {
   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
   table = document.getElementById("myTable");
   switching = true;
   dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      shouldSwitch = true;
    break;
  }
} else if (dir == "desc") {
  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
    shouldSwitch = true;
    break;
  }
}
}
if (shouldSwitch) {
  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  switching = true;
  switchcount ++;
} else {
  if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
}
}
}
}
//funktion für Profil pop up:
function openProfile() {
    document.getElementById("PProfile").style.display = "block";
  }
  
  function closeProfile() {
    document.getElementById("PProfile").style.display = "none";
  }
