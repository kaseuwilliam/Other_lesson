const express = require("express")
const router = express.Router()

const peepsController = require("../controllers/peopleController")


router.get('/', peepsController.getAllPeople)
router.get('/age/:id', peepsController.getPersonsAge)
router.post('/', peepsController.addPerson)
router.delete('/:id', peepsController.deletePerson)
router.put('/:id', peepsController.editPerson)



module.exports = router