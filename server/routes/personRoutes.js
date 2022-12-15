const express = require('express')
const router = express.Router()
const personService = require('../services/personService')

router.get('/person', async function (request, response) {
	try {
  	const people = await personService.getPeople()
		response.status(200).json(people)
	} catch (e) {
		response.status(500).json({ error: e })
	}
})

router.get('/person/:id', async function (request, response) {
	const personId = request.params.id

	try {
		const person = await personService.getPerson(personId)	
		response.status(200).json(person)
	} catch (e) {
		response.status(500).json({ error: e })
	}

})

router.post('/person', async function (request, response) {
	const { name, job, salary, approved } = request.body
	const person = { name, job, salary, approved }
	
	try {
		const savedPerson = await personService.savePerson(person)
		response.status(201).json(savedPerson)

	} catch (e) {
		response.status(500).json({ error: e })
	}
})

router.patch('/person/:id', async function (request, response) {
	const id = request.params.id
	const newPerson = request.body

	try {
		const person = await personService.updatePerson(id, newPerson)
		response.status(200).json(person)
	} catch (e) {
		response.status(500).json({ error: e })	
	}
})

router.delete('/person/:id', async function (request, response) {
	const id = request.params.id

	try {
		await personService.deletePerson(id)
		response.status(204).end()
	} catch (error) {
		response.status(500).json({ error: 'Couldnt delete person.' })
	}
})

module.exports = router