const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String },
    address: String,
  },
  { timestamps: true }
);

module.exports = (conn) => {
  return conn.model('User', UserSchema);
};
