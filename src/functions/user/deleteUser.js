const { getSuccessResponse } = require('../../utils/success');
const { getErrorResponse } = require('../../utils/error');

const connectToDatabase = require('../../utils/db');
const UserModel = require('../../models/UserModel');

module.exports.main = async (event) => {
  try {
    const { _id } = JSON.parse(event.body);
    let result;

    const dbConnected = await connectToDatabase();
    if (dbConnected) {
      const UserInstance = await UserModel(dbConnected);
      result = await UserInstance.findOneAndRemove({ _id });
    }
    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
