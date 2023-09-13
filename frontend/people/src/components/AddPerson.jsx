import React, {useState} from 'react'

const AddPerson = ({add}) => {

    const [person, setPerson] = useState({
        owner_name:"",
        location:"",
        age:"",
        pet_id:""
    })

    function handleName(e){
        
        setPerson(previousPerson =>{
            return {...previousPerson, owner_name: e.target.value}
        })
    }  
    
    function handleSubmit(e){
        e.preventDefault()
        add(person)
        setPerson({owner_name:"", location:"", age:"", pet_id:""})
    }

  return (
    <>
    
    <form onSubmit={handleSubmit}>

        <input type="text"
        placeholder='name'
        value= {person.owner_name}
        onChange= {handleName}
        />

        <input type="text"
        placeholder='location'
        value= {person.location}
        onChange= { e => setPerson(previous =>{
            return {...previous, location: e.target.value}
        }) }
        />

        <input type="number"
        placeholder='age'
        value= {person.age}
        onChange= { e => setPerson(previous =>{
            return {...previous, age: e.target.value}
        }) }
        />

        <input type="number"
        placeholder='Pet ID'
        value= {person.pet_id}
        onChange= { e => setPerson(previous =>{
            return {...previous, pet_id: e.target.value}
        }) }
        />

        <button>Add</button>

    </form>
    
    </>
  )
}

export default AddPerson