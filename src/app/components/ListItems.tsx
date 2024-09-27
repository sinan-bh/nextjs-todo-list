import React from 'react'
import Button from './Button'
import { type Todo, ReactSetState } from '../types/utils';

type List = {
    todo: Todo[];
    setTodo: ReactSetState<Todo[]>;
}

const ListItems = ({todo,setTodo}: List) => {

    const handleDelete = (id: string) => {
        setTodo(prev=> prev.filter(list=> list.id !== id))
      }

  return todo.map((list) => (
    <div key={list.id}>
      <h4>{list.title}</h4>
      <Button onClick={()=> handleDelete(list.id)}>DELETE</Button>
    </div>
  ))
}

export default ListItems
