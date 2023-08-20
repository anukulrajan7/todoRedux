import  React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/Todo/TodoSlice'
function AddTodo() {
    const [value ,setValue] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(value))
        setValue("")
    }
  return (
    <div className='w-full h-full '>
          <h1 className='bg-purple-700 w-fit mx-auto px-4 text-white font-serif text-2xl p-2 shadow-md text-center rounded-md shadow-purple-300'>Todo Saver</h1>
          <form className="max-w-sm mx-auto mt-4" onSubmit={addTodoHandler}>
      <div className="flex">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring"
          placeholder="Enter a new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Add
        </button>
      </div>
    </form>    
    </div>
  )
}

export default AddTodo