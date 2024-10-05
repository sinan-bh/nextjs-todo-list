"use client"
import React, {useContext} from 'react'
import { ReactSetState } from '../../types/utils';
import { MyContext } from '@/context/todoContext';

type Input = {
    input: string;
    setInput: ReactSetState<string>;
}

const Input = ({input, setInput}: Input) => {

  // const {editData} = useContext(MyContext)

  return (
    <div>
      <input
            className='border border-gray-300 border-spacing-8 bg-black text-white rounded p-2 '
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
    </div>
  )
}

export default Input
