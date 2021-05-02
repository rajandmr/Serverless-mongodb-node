const { getSuccessResponse } = require('../../utils/success');
const { getErrorResponse } = require('../../utils/error');

const connectToDatabase = require('../../utils/db');
const UserModel = require('../../models/UserModel');

module.exports.main = async (event) => {
  try {
    const request = event.queryStringParameters;
    const { _id } = request;
    const dbConnected = await connectToDatabase();
    if (dbConnected) {
      const UserInstance = await UserModel(dbConnected);
      result = await UserInstance.findOne({ _id });
    }

    return getSuccessResponse(result);
  } catch (error) {
    return getErrorResponse(error);
  }
};
