$(document).ready(function() {
    $('#formulario_login').submit(function(event) {
      event.preventDefault();
  
      var usuario = $('#txt_usuario').val();
      var pass = $('#txt_pass').val();
  
      $.ajax({
        type: 'POST',
        url: 'controlador.php',
        data: { usuario: usuario, pass: pass },
        dataType: 'json',
        success: function(response) {
          if (response.success) {
            window.location.replace('admin.html');
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: function() {
          alert('Ocurrió un error');
        }
      });
    });
  });