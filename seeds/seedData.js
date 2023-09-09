const petsList = require("./seedPets")
const peopleList = require("./seedPeople")
const People = require("../models/peopleModel")
const Pet = require("../models/petModel")


async function addDataToDB(){

    await Pet.bulkCreate(petsList)
    await People.bulkCreate(peopleList)

}


addDataToDB()