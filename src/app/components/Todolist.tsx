"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { type Todo } from "../types/utils";
import ListItems from "./ListItems";

const Todolist = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodo((prev) => [...prev, { title: input, id: Date.now().toString() }]);
    setInput("");
  };


  return (
    <div>
      <div>
        <h2>TODO LIST</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input input={input} setInput={setInput} />
          <Button>ADD</Button>
        </form>
        <div>
          <ListItems todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
