
  const email = document.getElementById('email');

function sololetras(event){
    
    var letra = new RegExp("[a-zA-Z ]");
  var espacio = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!letra.test(espacio)) {
    event.preventDefault();
    return false;
 
  }

  
  }
  function checkInputs() {
	
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
     }

     function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message; }


  function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

window.onload=function(){

  let numero = document.getElementById("numero");
  numero.value = Math.floor((Math.random()* (999999 - 0 + 1)) + 0);
  
} 
 


