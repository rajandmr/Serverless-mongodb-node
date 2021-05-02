const getUserById = require('../functions/user/getUserById');

describe('Unit test for getUserById', () => {
  it('verifies successful response', async () => {
    const event = {
      queryStringParameters: {
        _id: '608e51a6ec551700087f2396',
      },
    };

    const result = await getUserById.main(event);
    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)).toMatchObject({
      message: 'Executed Successfully',
      success: true,
    });
  });
});
