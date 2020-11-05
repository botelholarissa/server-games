const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/reprograma';

const connect = () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.on('error', () => console.error('Error connecting MongoDB'));
    connection.once('open', () => console.log('Conected'));
}

module.exports = { connect }