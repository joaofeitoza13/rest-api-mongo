const personData = require('../data/personData')

exports.getPerson = async function (id) {
  const person = await personData.getPerson(id)
  if(!person) throw new Error('Person not found.')

  return person
}

exports.getPeople = async function () {
  const people = await personData.getPeople()
  if(!people) throw new Error('People not found.')

  return people 
}

exports.savePerson = async function (data) {
  const person = await personData.savePerson(data)
  if(!person) throw new Error('Unable to save the person data.')

  return person 
}

exports.updatePerson = async function (id, data) {
  const person = await personData.updatePerson(id, data)
  if(!person) throw new Error('Unable to update person data.')

  return person 
}

exports.deletePerson = async function (id) {
  return personData.deletePerson(id)
}
