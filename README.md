# supermarket-api

Este proyecto hace parte de la prueba técnica para la aplicación de desarrollador backend del laboratorio digital del banco de occidente.

## Instalación
Para instalar el proyecto despues de clonarlo ejecutar `npm install`

## Configuración
Para ejecución con variables de ambiente en archivo plano, copiar el archivo `.env.example` a `.env` y configurar con los valores correspondientes.

## Ejecutar tests
Las pruenas unitarias fueron realizadas para las rutas y para el servicio de productos, para los cuales se crearon drivers para simular la dependencia de otro módulo en el proyecto.
Para ejecutar los tests ejecutar `npm run test`.

## Iniciar servidor
Para iniciar el servidor ejecutar `npm start`
Este proyecto se encuentra actualmente desplegado en Heroku y puede ser accedido en la URL `https://supermarket-bo.herokuapp.com/api`


Esta aplicación fue desarrollada utilizando:
- NodeJS v13.11.0

Framework:
- Express v4.17.1

Tests:
- Mocha v8.2.1
- sinon v9.2.2
- supertest v6.0.1
- proxyquire v2.1.3

Cobertura de tests:
- Istanbul (nyc) v15.0.1
