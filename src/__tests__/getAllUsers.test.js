const getAllUser = require('../functions/user/getAllUsers');

describe('Unit test for getAllUsers', function () {
  it('verifies successful response', async () => {
    const result = await getAllUser.main();

    expect(result.statusCode).toEqual(200);
  });
});

describe('Unit test for response Data', function () {
  it('verifies response payload type', async () => {
    const result = await getAllUser.main();
    expect(JSON.parse(result.body)).toMatchObject({
      message: 'Executed Successfully',
      success: true,
    });
  });
});
