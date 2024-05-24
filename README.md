# Go Local

## Requisitos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Angular CLI](https://angular.io/cli) 
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 
- [Maven](https://maven.apache.org/) 
- [MySQL](https://www.mysql.com/)

## Descarga e instalación del proyecto

### Front-end

Para clonar el repositorio del front-end de Go Local usa el siguiente comando en el directorio donde quieras guardarlo:

```sh
git clone https://github.com/CarolinaBrazalesSempere/go-local.git
```

También puedes descargarlo en formato zip directamente desde [GitHub](https://github.com/CarolinaBrazalesSempere/go-local.git)

Ahora tienes que instalar las dependencias necesarias para arrancar el proyecto. Para hacer esto usa el siguiente comando en el directorio del proyecto:

```sh
npm install
```

### Back-end

Para clonar el repositorio del back-end de Go Local usa el siguiente comando en el directorio donde quieras guardarlo:

```sh
git clone https://github.com/AinaraDP/Golocal_springboot.git
```

También puedes descargarlo en formato zip directamente desde [GitHub](https://github.com/AinaraDP/Golocal_springboot.git)

Una vez tengas el proyecto en tu máquina lo tendrás que importar en tu workspace de Eclipse como `Maven Project`.

### Base de datos

Para utilizar la aplicación tienes que crear la base de datos del proyecto. Para hacer esto abre el directorio `bbdd` que encontrarás dentro del repositorio del back-end
y ejecuta el script `golocal.sql`. 

Para poblar de datos la base de datos ejecuta el script `datos_golocal.sql`.

Asegúrate de que el servidor de la base de datos esté en ejecución y ten cuenta que puede que sea necesario añadir la conexión a la base de datos en el JPA del proyecto de back-end.

## Inicialización del proyecto

## Front-end

Una vez tengas las dependencias instaladas inicia la aplicación usando el siguiente comando:

```sh
ng serve
```

### Back-end

Asegúrate de que el servidor de la base de datos esté en ejecución y ten cuenta que puede que sea necesario añadir la conexión a la base de datos en el JPA del proyecto de back-end.

Ahora arranca la base de datos en Eclipse desde el menú `Boot Dashboard`.

Si quieres también puedes hacerlo usando el siguiente comando en el directorio del proyecto:

```sh
mvn spring-boot:run
```

### Abrir la aplicación en el navegador

Para abrir la aplicación solo tienes que introducir la URL [http://localhost:4200/](http://localhost:4200/) en la barra de navegación de tu navegador web.
