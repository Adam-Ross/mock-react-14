import {useEffect, useState} from 'react'

import Title from './components/Title'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {

    useEffect(() => {
        const getTodos = async () => {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/todos')
                const responseTodos = await data.json()
                console.log(responseTodos)
                setTodos([...todos, ...responseTodos])
                
                
            } catch (error) {
                console.log(error.message)
            }
        }

        getTodos()
    }, [])

    
    const [todos, setTodos] = useState([])

    const createTodo = (text) => {
        const newTodo = {
            title: text,
            id: todos.length + 1,
            completed: true
        }

        setTodos([newTodo, ...todos])
    }


    return (
        <div className="container">
            <Title />
            <TodoInput createTodo={createTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default App