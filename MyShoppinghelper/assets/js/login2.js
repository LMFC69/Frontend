	var benutzer = ['admin', 'Caio123'];
	var passwort = ['admin', 'passwort'];


	function set(form) /*Fuktion zum Eintragen*/ {

	  /*Eintragung ins Array*/
	  benutzer.push(form.userid.value)
	  passwort.push(form.pswrd.value)
	  if (form.userid.value != "" && form.pswrd.value != "") {
	    
		  swal({
	      height: "100",

	      title: "Geschafft!",
	      icon: "success",
	      text: "Benutzer wurde angelegt",
	      buttons: {
	        confirm: "Weiter"
	      }
	    })

	    window.open('login.html#login')

	  }
	}


	function check(form) /*Passwort und Nutzername wird überprüft*/ {

	  for (let i = 0; i < benutzer.length + 1; i++) {
	    if (form.userid.value == benutzer[i] && form.pswrd.value == passwort[i]) {
	      window.open('https://virtual-trade-mannheim.herokuapp.com/') /*Öffnet Zielseite*/
	    }
	  }
	  if (form.userid.value != "" ) {

	    swal({
	      height: "100",

	      title: "Fehler",
	      icon: "error",
	      text: "Benutzername oder Passwort falsch",
	      buttons: {
	        cancel: true,
	        confirm: "Ok"
	      }
	    })

	  }

	}

	
