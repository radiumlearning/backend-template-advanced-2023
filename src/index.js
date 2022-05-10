// use "import" to import libraries
import express from 'express';

import employees from './resources/employees';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/employees', employees.listEmployees);
app.post('/employees/create', employees.createEmployee);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
