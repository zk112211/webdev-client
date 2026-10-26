import TodoItem from "./TodoItem";
// With AI §3.8.4: "Email the TA" was appended to todos.json
// TODO §3.8.4: "Finish Lab 3" was appended to todos.json
import todos from "./todos.json";

export default function TodoList() {
  // With AI §3.8.4
  console.log(todos);
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
