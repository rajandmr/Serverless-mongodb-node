const { getSuccessResponse } = require('../../utils/success');
const { getErrorResponse } = require('../../utils/error');

const connectToDatabase = require('../../utils/db');
const UserModel = require('../../models/UserModel');

module.exports.main = async () => {
  try {
    let result;
    const dbConnected = await connectToDatabase();
    if (dbConnected) {
      const UserInstance = await UserModel(dbConnected);

      result = await UserInstance.find({});
    }
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
