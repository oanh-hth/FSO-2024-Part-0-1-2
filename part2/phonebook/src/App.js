import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import People from './components/People'
import { create, getAll, remove, update } from './services/person'
import Noti from './components/Noti'

const App = () => {
  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [noti, setNoti] = useState(null)
  const [error, setError] = useState(false)


  useEffect(() => {
    getAll().then(person => setPersons(person))
  }, [])

  const addHandler = (e) => {
    e.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber
    }

    const existedPer = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (existedPer) {
      if (window.confirm(`${newName} already is on the phonebook, replace the old number with a new one?`)) {
        update(existedPer.id, newContact).then(contact => {
          setPersons(persons.map(person => person.id !== existedPer.id ? person : contact))
        }).catch(error => {
          console.log('something went wrong')
          setError(true)
          setNoti(`${newName} has been already removed from the server`)
          setPersons(persons.filter(person => person.id !== existedPer.id))
          setTimeout(() => {
            setError(false)
          }, 5000)
        })
      }
    } else {
      create(newContact)
      .then(contact => {
        setPersons(persons.concat(contact))
      })
    }

    setNoti(
      `Added ${newName}`
    )
    setTimeout(() => {
      setNoti(null)
    }, 5000)

    setNewName('')
    setNewNumber('')

  }
  
    
  const deleteHandler = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      remove(id).then(() => setPersons(persons.filter(person => person.id !== id)))
      .catch(error => console.log('something went wrong'))
    }
  }


  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Noti message={noti} className={error ? 'error' : ''} />
      <Filter filterName={filterName} changeHandler={(e) => setFilterName(e.target.value)} />
      <h3>add a new</h3>
      <PersonForm
        submitHandler={addHandler}
        newName={newName}
        newNumber={newNumber}
        nameHandler={(e) => setNewName(e.target.value)}
        numberHandler={(e) => setNewNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <People filterName={filterName} persons={persons} onDelete={deleteHandler} />
    </div>
  )
}

export default App
