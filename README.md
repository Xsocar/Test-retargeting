# Test-retargeting

Esta prueba utiliza docker por lo que recomiendo usar la siguiente linea de codigo para correr la prueba:

```docker build -t html-server-image:v1 . ```

Nota: el nombre es "html-server-image:v1" solo es de ejemplo, pueden usar otro nombre que les acomode.

Despues de construir el archivo docker pueden correrlo mediante este codigo:

```docker run -d -p 80:80 html-server-image:v1```

Una vez corriendo el contenedor pueden ver la pagina en: ```localhost:80```

Nota: pueden estar ya usando el puerto 80 con otros programas como xampp, por lo que aconejo cambiarlo o desactivar momentaneamente xampp u otros.
