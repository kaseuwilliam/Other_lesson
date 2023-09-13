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

        const {owner_name,location,pet_id, age } = req.body
    
        if (owner_name == null || location == null || pet_id == null ){
    
            res.status(400).json({message:"The person is missing some properties"})
             
        } else{
    
            const newPerson = await People.create({owner_name,location,pet_id, age})
            res.status(201).json(newPerson)
    
        }

    } catch (error){

        res.status(500).json({message:error})
    }
   

}

async function deletePerson(req, res){

    const personId = req.params.id
  
    await People.destroy({where:{id:personId}}).then(result=>{
        
        if (result == 0){
            res.status(404).json("No rows deleted")
        } else{
            res.redirect('/people')
        }
    }).catch( error =>{
        res.status(500).json("Server error")
    })


}

async function editPerson(req, res){

    const { owner_name, location, pet_id, age} = req.body

    await People.update({ owner_name, location, pet_id, age}, {where:{id:req.params.id}})
    .then(response =>{
        res.status(200).redirect('/people')
    }).catch(error=>{
        res.status(500).json(error)
    })

}

module.exports = {getAllPeople, getPersonsAge, addPerson, deletePerson, editPerson}