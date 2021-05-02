const mongoose = require('mongoose');

const DB_CONN_STRING = process.env.DB_CONN_STRING;

let dbConnection = null;

module.exports = async () => {
  if (dbConnection != null) {
    return dbConnection;
  }

  if (dbConnection == null) {
    dbConnection = await mongoose.createConnection(DB_CONN_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    return dbConnection;
  }
};
