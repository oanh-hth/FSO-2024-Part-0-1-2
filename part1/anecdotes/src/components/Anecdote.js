const Anecdote = ({anecdote, votes}) => {
    return (
        <>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    )
}

export default Anecdote