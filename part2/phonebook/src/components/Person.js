const Person = ({name, number, onDelete}) => {
    return (
        <p>{name} {number} <button onClick={onDelete}>delete</button></p>
    )
}

export default Person