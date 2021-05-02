const { getSuccessResponse } = require('../../utils/success');
const { getErrorResponse } = require('../../utils/error');

const connectToDatabase = require('../../utils/db');
const UserModel = require('../../models/UserModel');

module.exports.main = async (event) => {
  try {
    const { name, email, address } = JSON.parse(event.body);
    let result;
    const dbConnected = await connectToDatabase();
    if (dbConnected) {
      const UserInstance = await UserModel(dbConnected);
      const userDoc = new UserInstance({
        name,
        email,
        address,
      });
      result = await userDoc.save();
    }

    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
