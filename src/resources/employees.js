const fs = require('fs');
const Employees = require('../data/employees.json');

const listEmployees = (req, res) => res.status(200).json(Employees);

const createEmployee = (req, res) => {
  const newEmployee = {
    id: new Date().getTime().toString(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  };

  Employees.push(newEmployee);

  // path must start from root
  fs.writeFile('./src/data/employees.json', JSON.stringify(Employees), {}, (err) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(201).send(newEmployee);
  });
};

export default {
  createEmployee,
  listEmployees,
};
