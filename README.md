# paradigmas
Para poder abrirlo debes dejar una carpeta con el nombre de 'proyecto' en la path de instalacion de XAMPP \xampp\htdocs 
Una vez se este ahi, se abre XAMPP y se inicializa apache, es entonces cuando puedes acceder a este via http://localhost/proyecto/.

##### SE DEBE ENTRAR PRIMERO CON  ADMINISTRADOR Y SETEAR UNA FRASE DE ENCRIPTADO PARA PODER ENTRAR CON  USUARIO SECUNDARIO ######
ya que el codigo lo que hace es guardar la ultima clave de encriptado en el localstorage del navegador y utilizarla como token para
que entre el usuario secundario.

 Para poder entrar como admin, se entregan las siguientes credenciales

user: admin
pass: admin


Ademas,por ejemplo:
 si se usa la palabra 'manzana' como clave de encriptado el resultado de esta sera 'manz' la clave para entrar como usuario secundario sera <b>manz</b>, no 'manzana'.


