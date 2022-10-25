import TodoItem from './TodoItem.js'

const TodoList = ({todos}) => {
    return todos.map((todo, index) => <TodoItem todo={todo} key={index} />)
}

export default TodoList