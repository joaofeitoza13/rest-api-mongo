const axios = require('axios')
const { default: mongoose } = require('mongoose')
const Person = require('./server/infra/models/Person')
const personService = require('./server/services/personService')

const BASE_URL = 'http://localhost:3333/person'
const generateString = () => (Math.random()*1000).toString()
const generateNumber = () => Math.floor(Math.random()*10000)
const generateBoolean = () => Boolean(Math.floor(Math.random()*10000)%2)

const generatePerson = () => {
  return person = {
    name: generateString(),
    job: generateString(),
    salary: generateNumber(),
    approved: generateBoolean(),
  }
}

jest.setTimeout(20000)

const request = (url, method, data) => axios({ url, method, data })

test('Should get a person by its id', async function () {
  const id = '639ace17739482b5bc108bdb'

  const response = await request(`${BASE_URL}/${id}`, 'get')
  expect(response.data._id).toBe(id)
})

test('Should get all persons', async function () {
  const response = await request(`${BASE_URL}/`, 'get')
  expect(response.status).toBeGreaterThan(0)
})

test('Should post a person', async function () {
  const person = generatePerson()

  const response =  await request(`${BASE_URL}/`, 'post', person)
  expect(response.status).toBe(201)
})

test('Should update a person', async function () {
  const id = '639ace17739482b5bc108bdb'
  const person = generatePerson()

  const response =  await request(`${BASE_URL}/${id}`, 'patch', person)
  expect(response.status).toBe(200)
})

test('Should delete a person', async function () {
  const id = '639ad01d27d7de0167e4de92'

  const response = await request(`${BASE_URL}/${id}`, 'delete')
  expect(response.status).toBe(204)
})