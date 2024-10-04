import React from 'react'
import Button from './Button'
import { type Todo, ReactSetState } from '../../types/utils';

type List = {
    todo: Todo[];
    setTodo: ReactSetState<Todo[]>;
}

const ListItems = ({todo,setTodo}: List) => {

    const handleDelete = (id: string) => {
        setTodo(prev=> prev.filter(list=> list.id !== id))
      }

    const handleEdite = (id: string) => {
      todo.find(edit=> edit.id === id)
      
    }

  return todo.map((list) => (
    <div key={list.id} className='flex justify-between p-2 border rounded-xl bg-black text-white my-2'>
      <h4>{list.title}</h4>
      <div onClick={()=> handleEdite(list.id)}>Edit</div>
      <Button onClick={()=> handleDelete(list.id)}>DELETE</Button>
    </div>
  ))
}

export default ListItems
