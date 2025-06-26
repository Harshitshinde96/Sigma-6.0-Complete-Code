import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "./features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkDone = (id) => {
    dispatch(markAsDone(id));
    console.log("Done");
  };
  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.isDone ? { textDecoration: "line-through" } : {}}
          >
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleMarkDone(todo.id)}>
              {todo.isDone ? "Done ✅" : "Mark As Done"}
              {/* At this place insted of this {todo.isDone ? "Done ✅" : "Mark As Done"} only MARK AS DONE can be written no worries */}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
