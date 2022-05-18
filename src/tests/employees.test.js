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
      first_name: 'Esteban',
      last_name: 'Frare',
      email: 'esteban.frare@radiumrocket.com',
      password: 'test123',
      dni: '38240915',
      address: 'Paraguay 2349',
      city: 'Rosario',
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
});
