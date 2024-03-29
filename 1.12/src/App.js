import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [allVotes, setVotes] = useState(Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  const [mostPopular, setMostPopular] = useState(0)

  const getRandom = () => {
    return (
      setSelected(getRandomInt(anecdotes.length))
    )
  }

  const addVote = () => {
    const copy = { ...allVotes }
    copy[selected] += 1
    setVotes(copy)
    let arr = Object.values(copy);
    let max = Math.max(...arr);
    if(copy[selected] >= max) {
      setMostPopular(selected);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {allVotes[selected]} votes</p>
      <div class="buttons">
        <button onClick={getRandom}>next anecdote</button>
        <button onClick={addVote}>vote</button>
      </div>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[mostPopular]}</p>
      <p>has {allVotes[mostPopular]} votes</p>
    </div>
  )
}

export default App