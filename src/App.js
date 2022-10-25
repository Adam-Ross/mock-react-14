import {useState} from 'react'
import Title from './components/Title'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'




const App = () => {

    const [todos, setTodos] = useState(['My first todo'])

    const createTodo = (text) => {
        setTodos([text, ...todos])
    }
    
    return (
        <div className="container">
            <Title />
            <InputForm createTodo={createTodo}/>
            <TodoList todos={todos} />
        </div>
    )
}

export default App