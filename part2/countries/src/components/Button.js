const Button = ({ toggle, onToggle }) => {
    return (
        <button onClick={onToggle}>{toggle ? 'hide' : 'show'}</button>

    )
}

export default Button