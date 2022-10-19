import Employees from '../models/Employees';
import APIError from '../helpers/reponse-format';

const listEmployees = async (req, res) => {
  try {
    const result = await Employees.find(req.query);
    if (!result.length) {
      throw new APIError('There are not employees', 404);
    }
    return res.status(200).json({
      message: 'List of Employees',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || error,
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
    return res.status(error.status || 500).json({
      message: error.message || error,
      data: undefined,
      error: true,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const result = await Employees.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      throw new APIError('Employee does not exists', 404);
    }
    return res.status(200).json({
      message: 'Employee deleted',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || error,
      data: undefined,
      error: true,
    });
  }
};

export default {
  createEmployee,
  listEmployees,
  deleteEmployee,
};
