# React + nodeJS
Creando contenido desde REACT

## Pasos a seguir 
Seguimos aprovechando el repositorio de back de las `task` que hemos usado para poder añadir tareas desde POSTMAN. Ahora vamos a añadir tareas desde `REACT`

Lo primero que tienes que comprobar es si la URL donde tienes levantado tu BACK es la misma que está en APP haciendo el `fetch`. Levanta el `BACK` y este `FRONT`para comprobar que funciona y traes las tareas creadas entes. Una vez hecho esto deberás hacer lo siguiente

- Crea un componente llamado `InputCreate.jsx` donde crearás un `input` y un `botón`
- La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React
- Una vez creado el módulo lo importaremos a `App.jsx` y le añadiremos a la ruta `/create`

## PISTAS
- Recuerda que lo que mandamos a BBDD desde POSTMAN es el `{ title }`. El ID se crea solo.
- Es un método POST al endpoint `/create`del BACK. Revisa que es correcto para poder crear tu envío
- Con el método `fetch` puedes añadir la url del end point y lo que queremos pasarle a esa URL. 
```js
//ejemplo
fetch(urlApi, {
        method: 'POST', // Método HTTP
        headers: {
          'Content-Type': 'application/json', // Indicamos que el contenido es JSON
        },
        body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
      })
```