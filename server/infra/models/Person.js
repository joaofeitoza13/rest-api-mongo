const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  job: String,
  salary: Number,
  approved: Boolean,  
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
