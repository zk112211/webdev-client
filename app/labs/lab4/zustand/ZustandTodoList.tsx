import { useTodoStore } from "./todoStore";
import ZustandTodoForm from "./ZustandTodoForm";
import ZustandTodoItem from "./ZustandTodoItem";

export default function ZustandTodoList() {
  const todos = useTodoStore((state) => state.todos);
  // On your own §4.5.2
  const clearDone = useTodoStore((state) => state.clearDone);
  return (
    <div id="wd-zustand-todo-list">
      <h3>Zustand Todo List</h3>
      <ZustandTodoForm />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ZustandTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {/* On your own §4.5.2 */}
      <button
        type="button"
        onClick={clearDone}
        id="wd-zustand-clear-done-click"
        className="mt-2 rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Clear Done
      </button>
    </div>
  );
}
