const PersonForm = ({submitHandler, nameHandler, numberHandler, newName, newNumber, onUpdate}) => {
    return (
        <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={nameHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberHandler} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    )
}

export default PersonForm