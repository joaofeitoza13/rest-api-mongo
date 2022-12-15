const Person = require('../infra/models/Person')

exports.getPerson = async function (id) {
  return Person.findOne({ _id: id })
}

exports.getPeople = async function () {
  return Person.find()
}

exports.savePerson = async function (person) {
  return Person.create(person)
}

exports.updatePerson = async function (id, person) {
  return Person.updateOne({ _id: id }, person)
}

exports.deletePerson = async function (id) {
  return Person.deleteOne({ _id: id })
}
