// Get the data from the database
const People = require("../models/peopleModel")



async function getAllPeople(req, res){
    
    try{
        
        const results = await People.findAll()
        res.status(200).json(results)

    } catch (error){

        res.status(500).json({message:error})

    }
    
}

async function getPersonsAge(req, res){

    try {
        
        const personId = req.params.id
        const person = await People.findByPk(personId)
        
        if(person === null){
            res.status(404).json({message:"The person was not found"})
            return
        }

        res.json({age: person.age})

    } catch (error) {
        
        res.status(500).json({message:error})
    }

}

async function addPerson(req, res){

    try{

        const person = req.body
    
        if (person.owner_name == null || person.location == null || person.pet_id == null ){
    
            res.status(400).json({message:"The person is missing some properties"})
             
        } else{
    
            const newPerson = await People.create({person})
            res.status(201).json(newPerson)
    
        }

    } catch (error){

        res.status(500).json({message:error})
    }
   

}

module.exports = {getAllPeople, getPersonsAge, addPerson}