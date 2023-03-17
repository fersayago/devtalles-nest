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

#Sección 5: Nest CLI Resource - Brands CRUD
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