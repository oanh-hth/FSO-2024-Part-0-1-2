import Person from "./Person"
const People = ({ filterName, persons, onDelete }) => {
    let content

    if (filterName) {
        content = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(per => <Person key={per.id} name={per.name} number={per.number} onDelete={() => onDelete(per.id, per.name)} />)
    } else {
        content = persons.map(person => <Person key={person.id} name={person.name} number={person.number} onDelete={() =>onDelete(person.id, person.name)} />)
    }

    return content

}

export default People