require('dotenv').config();

const enviroment = ['NODE_ENV', 'MONGO_HOST', 'MONGO_DATABASE'];

enviroment.forEach((name) => {
    if (!process.env[name]) {
        throw new Error(`${name}: ${process.env[name]}`);
    }
});

module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3600",
    "apiEndpoint": "http://localhost:3600",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    },
    "NODE_ENV": process.env.NODE_ENV,
    "DATABASE": process.env.MONGO_DATABASE,
    "HOST": process.env.MONGO_HOST
};