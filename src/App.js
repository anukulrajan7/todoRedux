import React from 'react'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

function App() {
  return (
    <div className='w-full h-[100vh] flex justify-center py-20'>
      <div className='bg-gray-500 shadow-md w-[50%] shadow-gray-300 rounded-md p-4 flex justify-center  flex-col items-center gap-10 m-auto '>
       <AddTodo/>
       <Todo/>
      
      </div>
    </div>
  )
}

export default App
