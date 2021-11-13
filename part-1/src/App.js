import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.rate(props.feedback + 1)}>{props.label}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAverage = () => { 
    if((bad + neutral + good) === 0)
      return (0)
    else
      return (
        (good*1 + bad*(-1)) / (bad + neutral + good)
      )
  }

  const getPostivity = () => { 
    return (
      (good / (bad + neutral + good))*100
    )
  }

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value} {props.character}</td>
      </tr>
    )
  }

  const Statistics = (props) => {
    if((props.bad + props.neutral + props.good) === 0)
      return (
        <div>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </div>
      )
    else
      return (
        <div>
          <h2>statistics</h2>
          <table>
            <tbody>
              <StatisticLine text="good" value ={props.good} />
              <StatisticLine text="neutral" value ={props.neutral} />
              <StatisticLine text="bad" value ={props.bad} />
              <StatisticLine text="all" value ={props.bad + props.neutral + props.good} />
              <StatisticLine text="average" value ={getAverage()} />
              <StatisticLine text="positive" value ={getPostivity()} character="%" />
            </tbody>
          </table>
        </div>
      )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button label="good" rate={setGood} feedback={good} />
      <Button label="neutral" rate={setNeutral} feedback={neutral} />
      <Button label="bad" rate={setBad} feedback={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
