function validarForm(){
			var vValido = true;
			var vUsuario = document.getElementById('usuario').value;
            var vEdad = document.getElementById('numero').value;
            var vContraseña = document.getElementById('contraseña').value;
            var vTelefono = document.getElementById('telefono').value;
            var vFecha = document.getElementById('fecha').value;

if(vUsuario.trim()==''){
alert('debes ingresar un nombre ');
vValido =false;
Event.preventDefault()
            }

if(vFecha.trim()==''){
    alert('la fecha es obligatoria para su registracion');
    vValido=false;
    Event.preventDefault()
}
           
         
if(vEdad  < 18 ){
    alert('No tienes edad para completar este formulario')
    vValido=false;
    Event.preventDefault()
}

if(vContraseña.length <6){
    vValido=false;
    alert('La contraseña debe tener mas caracteres')
    Event.preventDefault()
}

if( !(/^\d{9}$/.test(vTelefono)) ) {
    alert('ingrese un telefono valido')
    vValido=false;
    Event.preventDefault()
  }


if(vValido===true ){
    alert('datos cargados ')
    Event.preventDefault()
}

         return vValido;			
}


