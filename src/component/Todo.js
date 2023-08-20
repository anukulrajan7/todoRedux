import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, updateTodo } from "../feature/Todo/TodoSlice";
import { AiFillDelete } from "react-icons/ai";
import { GrCheckbox } from "react-icons/gr";
import { AiOutlineCheck, AiTwotoneEdit } from "react-icons/ai";
function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos); // Assuming your state slice name is "todo"
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [id,setId] = useState()
  const [value ,setValue] = useState()


  return (
    <>
      <div className="text-white text-2xl font-serif font-bold"> Todo </div>
      <div className="flex p-4 w-full flex-col justify-center items-center gap-4 ">
        {todos.map((todo) => (
          <div
            className="flex p-2 px-3 justify-between bg-white w-full  capitalize text-purple-700 text-xl"
            key={todo.id}
          >
            <div>{todo.text}</div>
            <div className="flex justify-center items-center gap-4">
              {" "}
              <button
                className="flex place-content-center bg-purple-900 p-1 "
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <AiFillDelete className="text-white  text-2xl" />
              </button>
              <button
                onClick={() => {
                  dispatch(updateTodo(todo.id));
                }}
                className="flex place-content-center p-1 "
              >
                {!todo.completed ? (
                  <GrCheckbox className="text-white  text-2xl" />
                ) : (
                  <AiOutlineCheck className="text-purple-700  text-2xl" />
                )}
              </button>
              <button
                className="flex place-content-center bg-purple-900 p-1 "
                onClick={() => {
                  setEdit(!edit);
                  setId(todo.id);
                }}
              >
                <AiTwotoneEdit className="text-white  text-2xl" />
              </button>
            </div>
          </div>
        ))}
      {
  edit ? (
    <div>
      <form
        className="max-w-sm mx-auto mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(editTodo({ id, value }));
          setEdit(false); // Turn off the edit mode after saving
        }}
      >
        <div className="flex">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring"
            placeholder="Edit todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  )
}
      </div>
    </>
  );
}

export default Todo;
