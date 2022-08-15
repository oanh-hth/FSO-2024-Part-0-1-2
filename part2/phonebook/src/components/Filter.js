const Filter = ({filterName, changeHandler}) => {
    return (
        <div>
            filter shown with: <input value={filterName} onChange={changeHandler} />
        </div>
    )
}

export default Filter