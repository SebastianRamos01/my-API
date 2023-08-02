API de Posts

Esta API permite a los usuarios crear, leer, actualizar y eliminar publicaciones.

Recursos

Posts
Un post es una publicación que puede ser creada por un usuario. Cada post tiene un título, un cuerpo un autor una opcion destacado y una fecha de publicación.

Solicitudes

Crear un post
Para crear un post, envía una solicitud POST a la ruta /posts. El cuerpo de la solicitud debe contener los siguientes campos:

* `title`: El título del post.
* `body`: El cuerpo del post.
* `author`: El autor del post.
* `featured`: El estado del post.

Leer un post
Para leer un post, envía una solicitud GET a la ruta /posts/{id}, donde {id} es el ID del post.

Actualizar un post
Para actualizar un post, envía una solicitud PUT a la ruta /posts/{id}. El cuerpo de la solicitud debe contener los siguientes campos:

* `title`: El título del post (opcional).
* `body`: El cuerpo del post (opcional).
* `author`: El autor del post (opcional).
* `featured`: El estado del post (opcional).

Eliminar un post
Para eliminar un post, envía una solicitud DELETE a la ruta /posts/{id}, donde {id} es el ID del post.

Respuestas

Crear un post
Una solicitud exitosa para crear un post devolverá una respuesta HTTP 201 con el siguiente mensaje:

{
  message: "post-added"
}

Leer un post
Una solicitud exitosa para leer un post devolverá una respuesta HTTP 200 con el siguiente cuerpo:

{
  "id": 123,
  "title": "El título del post",
  "body": "El cuerpo del post",
  "createdAt": "2023-03-08T12:00:00Z"
}

Actualizar un post
Una solicitud exitosa para actualizar un post devolverá una respuesta HTTP 200 con el siguiente mensaje:

{
  message: "post-updated"
}

Eliminar un post
Una solicitud exitosa para eliminar un post devolverá una respuesta HTTP 204 con el siguiente mensaje:

{
  message: "post-deleted"
}
Errores

Si la solicitud no es válida, la API devolverá una respuesta HTTP 400 con un cuerpo que contiene el mensaje de error.

Por ejemplo, si intentas crear un post sin especificar el título, la API devolverá la siguiente respuesta:

{
  message: "parameters-needed"
}

Conclusión

Esta API es una forma fácil de crear, leer, actualizar y eliminar publicaciones.