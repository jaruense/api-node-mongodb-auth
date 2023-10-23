const config = require('../config/env.config');
const mongoose = require('mongoose');
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    useUnifiedTopology: true,
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
};

mongoose
    .connect(`${config.HOST}/${config.DATABASE}`, options)
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', err, ++count);
        setTimeout(connectWithRetry, 5000)
    });

exports.mongoose = mongoose;