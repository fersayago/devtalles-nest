# Nest Devtalles
[Nest: Desarrollo backend escalable con Node](https://cursos.devtalles.com/courses/nest)

# Nest

### Expandible
Estructura modular que permite usar otras librerías fácilmente

### Versatil
Brinda la columna vertebral de todo tipo de aplicaciones del lado del servidor

### Progresivo
Toma lo mejor y último de JavaScript y nos ofrece soluciones robustas.

# Sección 1: Introducción
[Repo con enlaces utiles para el curso](https://gist.github.com/Klerith/c0ef4f48d986e2cf3308bb54fff84ea5)

## Instalaciones recomendadas
- Visual Studio Code
- Postman
- Table Plus
- Git
- Node
- Nvm
- Docker Desktop

# Sección 2: Intro a TypeScript y conocimientos generales necesarios
Esta sección tiene por objetivo dar unas bases sobre TypeScript con la idea de que se familiaricen con los conceptos comunes usados en el día a día con Nest.

Aquí veremos:
- Tipos básicos
- Interfaces
- Implementaciones
- Clases
- Patrón adaptador
- Principio de sustitución de Liskov
- Inyección de dependencias
- Getters
- Métodos asíncronos
- Decoradores de clases y métodos

Es importante recalcar que esto no es una introducción a TypeScript, son conceptos que necesito exponer porque los usaremos en el curso de Nest.

Es importante entender que la principal diferencia entre clases e interfaces es que la clase permite crear instancias como si fuese un molde mientras que la interfaz sirve solo para crear reglas y condiciones ya que no tiene ninguna representación

# Sección 3: Primeros pasos en Nest
- ¿Qué es Nest?
- ¿Por qué usarlo?
- Explicacion sobnre cada archivo en un proyecto nuevo de Nest
- Core Nest building blocks
  - Módulos
  - Controladores (Post, Patch, Get, Delete)
  - Primeros decoradores
  - Servicios
  - Inyección de dependencias
  - Pipes
  - Exception Filters

Adicionalmente estaremos creando un Rest Api inicial para ir explicando cada concepto paso a paso.

# Sección 4: DTOs y validación de información
Esta sección terminaremos el POST, PATCH, DELETE de nuestro CRUD inicial, pero de forma puntual veremos:
- DTO (Data Transfer Object)
- Patch, Post, Delete
- Validaciones automáticas
- Class Validator
- Class Transformer
- Seguir en principio DRY
- Algunos decoradores del Class Validator útiles

# Sección 5: Nest CLI Resource - Brands CRUD
Esta sección es un reforzamiento de lo aprendido hasta el momento, pero le adicionamos la <b>comunicación</b> entre módulos y servicios. Puntualmente:
- SEED Endpoint
  - Llenar data de Autos y Marcas
  - Comunicar módulo seed, con los otros módulos de nuestra aplicación.
- Errores comunes a la hora de utilizar módulos enlazados
- Problemas con inyección de dependencias de módulos externos
- Brans CRUD completo
  - Endpoints
  - DTOs
  - Servicios
  - Controladores

# Sección 6: Generar build de producción básico
El objetivo de esta sección es generar una build de producción con Nest para poder utilizarla sin Nest. Mas adelante se podra desplegar en la nube pero la idea de esta sección es poder desplegarlo en nuestra computadora.

# Sección 7:  MongoDB Pokedex
Esta sección enteramente se enfoca en la grabación a base de datos, pero puntualmente:
- Validaciones
- CRUD contra base de datos
- Docker y Docker Compose
- Conectar contenedor con filesystem (para mantener la data de la base de datos)
- Schemas
- Modelos
- DTOs y sus textensiones
- Respaldar a Github

# Sección 8: Seed y Paginación
Esta seccipon tiene por objetivo aprender:
- Uso de modelos en diferentes módulos
- SEED para llenar la base de datos
- Paginación de resultados
- DTOs para Query parameters
- Transformación de DTOs
Tambien vamos a ver formas de hacer inserciones por lote y varias formas de lograrlo.

# Sección 9: Variables de entorno - Deployment y Dockerizar la aplicación
En esta sección trabajaremos en la configuración de variables de entorno y su validación. Los temas a ver son:
- Dockerización
- Mongo Atlas
- Env file
- joi
- Validation Schemas
- Configuration Module
- Recomendaciones para un Readme útil
- Despliegues
- Dockerfile

# Sección 10: TypeORM - Postgres
En esta sección estaremos trabajando con:
- TypeORM
- Postgres
- CRUD
- Constrains
- Validaciones
- Búsquedas
- Paginaciones
- DTOs
- Entities
- Decoradores de TypeORM para entidades
- Métodos BeforeInsert, BeforeUpdate
Es una sección importante porque a partir de aca, empezamos a construir sobre ells relaciones, autenticación, autorización y websockets.

# Sección 11: Relaciones en TypeORM
En esta sección nos enfocamos en contenido especifico de base de datos relacionales:
- Relaciones
  - De uno a muchos
  - De muchos a uno
- Query Runner
- Query Builder
- Transacciones
- Commits y Rollbacks
- Renombrar tablas
- Creación de un SEED
- Aplanar resultados
La idea es hacer que nuestro endpoint de creación y actualización de producto permita la actualización de una tabla secundaria de la misma forma como lo hemos creado en la sección anterior.

# Sección 12: Carga de archivos
Se va a trabajar con la carga de archivos al backend. No se recomienda colocar archivos fisicicamente en el backend, lo que se recomienda es subirlos y colocarlos en un hosting o servicio diferente.
Veremos validaciones y control de carga de cualquier archivo hacia el backend.

# Sección 13: Autenticación y autorización
Esta es una de las seccionse mas grandes del curso. Puntualmente se va a tratar:
- Autenticación
- Autorización
- Json Web Tokens
- Hash de contraseñas
- Nest passport
- Módulos asíncronos
- Protección de rutas
- Custom Method Decorators
- Custom Class Decorators
- Custom Property Decorators
- Enlazar usuarios con productos
- Bearer Tokens
- Mas