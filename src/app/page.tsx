import Todolist from "./components/todolist/Todolist";
import { TodoContext } from "@/context/todoContext";

export default function Home() {
  return (
    <div>
      <TodoContext>
      <main className="h-[100vh] flex justify-center items-center">
        <Todolist />
      </main>
      </TodoContext>
    </div>
  );
}
