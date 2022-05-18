import Employees from '../models/Employees';

const listEmployees = async (req, res) => {
  try {
    const result = await Employees.find(req.query);

    if (!result.length) {
      return res.status(404).json({
        message: 'There are not employees',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'List of Employees',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employees.create({
      id: new Date().getTime().toString(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      dni: req.body.dni,
      city: req.body.city,
      zip: req.body.zip,
    });

    const newEmployeeSaved = await newEmployee.save();

    return res.status(201).json({
      message: 'Employee created',
      data: newEmployeeSaved,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
      data: undefined,
      error: true,
    });
  }
};

export default {
  createEmployee,
  listEmployees,
};
