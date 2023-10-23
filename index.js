const config = require('./app/common/config/env.config');

const express = require('express');
const app = express();

const AuthorizationRouter = require('./app/authorization/routes.config');
const UserRouter = require('./app/users/routes.config');


app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
   res.header('Access-Control-Expose-Headers', 'Content-Length');
   res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
   if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
   } else {
      return next();
   }
});

app.use(express.json());

AuthorizationRouter.routesConfig(app);
UserRouter.routesConfig(app);

app.listen(config.port, function () {
   console.log(`App listening at port %s`, config.port)
})


