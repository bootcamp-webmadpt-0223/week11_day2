# week11_day2

> Node | Basic Authorization, Autentication & Sessions


## Main points: session management

Para gestionar autorización y sesiones en un Ironlauncher, es necesario:
1. Instalar `bcryptjs`, `express-session` y `connect-mongo`
2. Incluir la clave `SESSION_SECRET` en el archivo `.env`
3. Incluir el archivo `session.config.js` en el directorio `configs` y enlazarlo a `app.js` mediante `require("./config/session.config")(app)`

Las dependecias `express-session` y `connect-mongo` ofrecen configuraciones que permiten gestionar sesiones de usuario:
- La propiedad `req.session.currentUser` almacena el usuario identificado.
- El método `req.session.destroy()` cierra la sesión.