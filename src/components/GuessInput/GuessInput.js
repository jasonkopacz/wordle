import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Banner from '../Banner/Banner'

function GuessInput( { guesses, setGuesses, answer, nextGuesses  }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit() {
    event.preventDefault();
    nextGuesses = [...guesses, guess.toUpperCase()];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() == answer) {
      let input = document.getElementById('guess')
      input.disabled=true
      document.getElementById('won').style.display = 'block'
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      let input = document.getElementById('guess')
      input.disabled=true
      document.getElementById('lost').style.display = 'block'
      } else {
        setGuess('')
      }
    }

  return (
    <>
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
      <Banner won={true} length={guesses.length} answer={answer} />
      <Banner won={false} answer={answer} />
    </>
  )
}

export default GuessInput;
