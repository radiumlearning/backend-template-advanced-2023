import request from 'supertest';
import Employees from '../models/Employees';
import employeesSeed from '../seed/employees';
import app from '../app';

beforeAll(async () => {
  await Employees.collection.insertMany(employeesSeed);
});

describe('Test Employees routes', () => {
  test('It should create a new employee', async () => {
    const response = await request(app).post('/employees/create').send({
      first_name: 'Carlos',
      last_name: 'Gardel',
      email: 'carlos.gardel@radiumrocket.com',
      password: 'test123',
      dni: '19231992',
      address: 'Rivoli 2349',
      city: 'Paris',
      zip: '2000',
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.error).toBe(false);
  });

  test('It should get the employee list', async () => {
    const response = await request(app).get('/employees');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });

  test('It should delete a employee', async () => {
    // eslint-disable-next-line no-underscore-dangle
    const response = await request(app).delete(`/employees/${employeesSeed[0]._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(false);
  });
});
