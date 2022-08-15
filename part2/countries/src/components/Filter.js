const Filter = ({filterName, onChange}) => {
    return (
        <div>
            find countries: <input value={filterName} onChange={onChange} />
        </div>
    )
}

export default Filter