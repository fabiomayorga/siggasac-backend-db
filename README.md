<p align="center">
  <a href="http://www.ekosave.co" target="blank"><img src="http://www.ekosave.co/wp-content/uploads/2019/06/eko.png" width="320" alt="Ekosave Logo" /></a>
</p>

<h1 align="center">Módulo de base de datos SQL</h1>

## ❯ Tabla de contenido

- [Primeros pasos](#-primeros-pasos)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Licencia](#-licencia)

## ❯ Primeros pasos

### Paso 1: Configurar el entorno de desarrollo

Antes de iniciar debes tener instalado [Node.js y NPM](https://nodejs.org/en/download/)

Instalar globalmente NestJS
[NestJS](https://github.com/nestjs/nest-cli)
```bash
npm install -g @nestjs/cli
```

Instalar globalmente
[Typescript](https://www.typescriptlang.org/index.html#download-links)

```bash
npm install -g typescript
```

Instalar globalmente
[TypeORM](https://typeorm.io/#/)

```bash
npm install -g typeorm
```

Instalar globalmente
[ts-node](https://github.com/TypeStrong/ts-node)

```bash
npm install -g ts-node
```

## ❯ Estructura del proyecto

| Nombre                            | Descripción |
| --------------------------------- | ----------- |
| **dist/**                         | Los archivos fuente compilados estarán aquí. |
| **src/**                          | Archivos fuente |
| **src/config/**                   | Variables de entorno, configuración de la base de datos, plugins |
| **src/database/**                 | Factorías, migraciones y seeders |
| **src/database/factories/**       | Factory para generar entidades falsas. |
| **src/database/migrations/**      | Scripts de migración de base de datos |
| **src/database/seeds/**           | Seeds para crear algunos datos en la base de datos |
| **src/entities/**                 | Modelos TypeORM |
| **src/helpers/**                  | Clases para ayuda de lógica de negocio  |
| **src/libs/**                     | Clases y librería propias de la aplicación |
| **src/modules/**                  | Controladores de los endpoints |
| **src/repositories/**             | Clases que se conectan con la base de datos |
| **src/services/**                 | Clases que se alimentan de los repositorios para servir los datos a los controladores |
| **src/index.ts**                  | Punto de inicio de la aplicaión |
| **src/Server.ts**                 | Clase que contiene la configuración y la lógica necesaria para arrancar la aplicación |
| .env.example                      | Environment configurations |

