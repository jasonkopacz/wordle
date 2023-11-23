import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessInput( { guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit() {
    event.preventDefault();
    if (NUM_OF_GUESSES_ALLOWED === guesses.length) {
      window.alert("No more guesses allowed")
    }

    console.log(guesses)
    let nextGuesses = [...guesses, guess.toUpperCase()];
    setGuesses(nextGuesses);
    setGuess('')
  }
  return (
    <form onSubmit={(handleSubmit)} className='guess-input-wrapper'>
      <label htmlFor='guess'>Guess word:</label>
      <input 
        id='guess'
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letters required'
        value={guess.toUpperCase()}
        onChange={(event) => (setGuess(event.target.value))} >
      </input>
    </form>
  )
}

export default GuessInput;
