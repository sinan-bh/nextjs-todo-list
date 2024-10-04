"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { type Todo } from "../../types/utils";
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
      <div className="text-center border bg-black p-2 rounded-2xl text-white my-2">
        <h2>TODO LIST</h2>
      </div>
      <div>
        <form className="flex" onSubmit={handleSubmit}>
          <Input input={input} setInput={setInput} />
          <Button className="flex justify-center border  rounded-xl border-green-900 ml-2 p-2 bg-green-700">ADD</Button>
        </form>
        <div>
          <ListItems todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
