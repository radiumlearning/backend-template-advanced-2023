// use "import" to import libraries
import express from 'express';

import employees from './controllers/employees';
import employeesValidation from './validations/employees';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/employees', employees.listEmployees);
app.post('/employees/create', employeesValidation.creation, employees.createEmployee);
app.delete('/employees/:id', employees.deleteEmployee);

export default app;
