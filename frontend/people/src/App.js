import React,{useState, useEffect} from 'react'
import Person from './components/Person'
import AddPerson from './components/AddPerson'
import apiConn from './api/conn'


const App = () => {

  const [people, setPeople] = useState([])

  async function getPeople(){

    apiConn.get("/people")
    .then(response =>{
      setPeople([...response.data])
    })
    .catch(error =>{
      console.log(error)
    })

  }

  useEffect(()=>{
    
    getPeople()

  }, [])

  async function add(person){

    apiConn.post('/people', { owner_name: person.owner_name, location: person.location, age: person.age, pet_id: person.pet_id})
    .then(response =>{
      console.log(response.data)
      getPeople()
    })
    .catch(error =>{
      console.log(error)
    })
  
  }

  async function handleDelete(id){
  
     apiConn.delete(`/people/${id}`)
    .then(response =>{
      console.log(response)
      getPeople()
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <>
    <AddPerson add={add}/>
    <Person peopleList={people} handleDelete={handleDelete}/>
    </>
  )
}

export default App