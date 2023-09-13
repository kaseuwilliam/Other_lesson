import React from 'react'

const Person = ({peopleList, handleDelete}) => {

  return (
    <>
    <h2>List of People</h2>

    {peopleList.length != 0 && peopleList.map(person =>{
        return (
            <div key={person.id}>
                <h2>Name: {person.owner_name}</h2>
                <h3>Location: {person.location}</h3>
                <h4>Pet ID: {person.pet_id}</h4>
                <p>Age: {person.age}</p>
                <button onClick={ e => handleDelete(person.id)}>Delete Person</button>
            </div>
        )
    })}
    </>
  )
}

export default Person