import mongoose from 'mongoose';

// Generate ObjetId on https://observablehq.com/@hugodf/mongodb-objectid-generator
export default [{
  _id: mongoose.Types.ObjectId('60d4a32f257e066e9495ce12'),
  first_name: 'Lucia',
  last_name: 'Alvarez',
  email: 'lucia.alvarez@radiumrocket.com',
  password: 'test123',
  dni: '38738915',
  address: 'Italia 2349',
  city: 'Rosario',
  zip: '2000',
}];
