import Part from "./Part"

const Content = ({ parts }) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
            <p><b>total of {total} exercises</b></p>
        </>
    )
}

export default Content