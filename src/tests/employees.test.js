import app from '../app';

const request = require('supertest');

describe('Test Employees routes', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/employees');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });
});
