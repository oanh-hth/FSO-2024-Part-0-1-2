import StatisticLine from "./StatisticLine"

const Statistics = ({ good, bad, neutral }) => {
    let content
    if ((good + bad + neutral) === 0) {
        content = <p>No feedback given</p>
    } else {
        content =
            <table>
                <tbody>
                    <StatisticLine text='good' value={good} />
                    <StatisticLine text='neutral' value={neutral} />
                    <StatisticLine text='bad' value={bad} />
                    <StatisticLine text='all' value={good + bad + neutral} />
                    <StatisticLine text='average' value={((good - bad) / (good + bad + neutral)).toFixed(1)} />
                    <StatisticLine text='positive' value={`${(good / (good + bad + neutral) * 100).toFixed(1)} %`} />
                </tbody>
            </table>
    }
    return (
        <>
            {content}
        </>
      
  )
}

export default Statistics