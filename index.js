const users = [
    { email: 'vinilo', contrasena: '1234' },
    
  ];
  
  function iniciarSesion() {
    var user_ = document.getElementById('user').value;
    var pass_ = document.getElementById('pass').value;
  
    // console.log(user_);
    // console.log(pass_);
  
    var verify = !!users.find(element => element.email === user_ && element.contrasena === pass_)
  
    console.log(verify);
  
    if (verify) {
      // window.location = 'verificacion.html';
      alert('¡Correo y contraseña correctos!');
    } else {
      alert('Correo o contraseña incorrecta');
    }
  }