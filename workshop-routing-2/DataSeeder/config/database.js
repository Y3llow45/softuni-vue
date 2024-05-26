const mongoose = require('mongoose');
const dbURL = "mongodb://localhost:27017/rest-api-db";

module.exports = () => {
    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};