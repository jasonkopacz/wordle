import React from 'react';

function Guess( { guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit() {
    event.preventDefault();
    console.log(guesses)
    if (guess.length < 5) {
      return window.alert('not long enough')
    }
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    setGuess('')
  }
  return (
    <form onSubmit={(handleSubmit)} className='guess-input-wrapper'>
      <label htmlFor='guess'>Guess word</label>
      <input 
        id='guess'
        type="text"
        required
        minLength={5}
        maxLength={5}
        value={guess.toUpperCase()}
        onChange={(event) => (setGuess(event.target.value))} >
      </input>
      <button htmlFor="guess" type="submit">Submit</button>
    </form>
  )
}

export default Guess;
