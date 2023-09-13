const {connectToDB} = require("../models/conn")
const People = require("../models/peopleModel")
const Pet = require("../models/petModel")

async function initializeDB(){


    try{

        await Pet.sync()
        await People.sync()

        console.log("The tables were successfully created")
        return true

    } catch (error) {

        console.error("the tables were not created, here is the error" , error)
        return false
    }


}

initializeDB()