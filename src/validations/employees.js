import Joi from 'joi';

const creation = (req, res, next) => {
  // Create Schema with validations
  const employee = Joi.object({
    first_name: Joi.string().min(1).max(50).required(),
    last_name: Joi.string().min(1).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    gender: Joi.string().valid('male', 'female'),
  });

  // Validate Schema with the body of the request
  const validation = employee.validate(req.body);

  // If exist an error, return a 400 response with the error detail
  if (validation.error) {
    return res.status(400).json({
      error: validation.error,
    });
  }

  // If not exist an error, "next" is executed to continue with the next function
  return next();
};

export default {
  creation,
};
