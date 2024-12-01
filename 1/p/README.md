# Spia Portal

Migración de AngularJs a Angular 15 para proyecto [spia-business-portal](https://172.20.140.230/front-end/spia-business-portal).

## Versiones

**Node JS** - v18.12.0

**NPM** - 8.19.2

**Angular** - 15.1.3

---

Ahora existen multiples entornos de trabajo, dependiendo de cual elijas las variables de entorno
y otras configuraciones van a variar para adaptarse al entorno especifico donde se alojara el
proyecto. Los entornos que existen actualmente son:

## Local

Prepara el proyecto para correr en el servidor Local.

```
mvn clean install -Dmaven.test.skip=true dependency::tree -e -Dhttps.protocols=TLSv1.2 -Dangular.enviroment=local
```

## Server

Prepara el proyecto para correr en el servidor de desarrollo,

```
mvn clean install -Dmaven.test.skip=true dependency::tree -e -Dhttps.protocols=TLSv1.2 -Dangular.enviroment=server
```

## Production

Prepara el proyecto para correr en producción.

```
mvn clean install -Dmaven.test.skip=true dependency::tree -e -Dhttps.protocols=TLSv1.2 -Dangular.enviroment=build
```

Para compilar en un **.war** el proyecto abrir una consola en la raíz, y ejecutar el comando que necesite.
Luego el archivo **.war** estará ubicado en la carpeta **target** en la raíz del proyecto.

Para poder correr correctamente el **.war** en un servidor WildFly se tendrá que remover una
linea de configuración en el archivo *standalone/configuration/standalone.xml* (Esto es temporal
mientras se crea una regla que soporte el proyecto):

```
<response-header name="Content-Security-Policy" header-name="Content-Security-Policy" />
```
## Desarrollo (Angular)

Con el fin de poder agilizar el desarrollo frontend de la aplicación se puede desplegar en un servidor local (Consumiendo la API del servidor de desarrollo 30) para visualizar los cambios de una manera más eficiente.

Para desplegar la aplicación Angular en un servidor de desarrollo previamente debemos tener un **.war** de BusinessPortal desplegado en el servidor de desarrollo.

Luego descargar el proyecto **spia-portal** de este repositorio, abrir una consola en la carpeta **app** del proyecto y ejecutar:

```
npm install
```

Para instalar las dependencia de Angular, y luego:

```
ng serve
```

Para levantar el servidor de desarrollo, una vez se ejecute la aplicación estará disponible en **localhost:4200**.
