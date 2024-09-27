import React from 'react'
import { ReactSetState } from '../types/utils';

type Input = {
    input: string;
    setInput: ReactSetState<string>;
}

const Input = ({input, setInput}: Input) => {
  return (
    <div>
      <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
    </div>
  )
}

export default Input
