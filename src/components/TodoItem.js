const TodoItem = ({todo}) => {
    return (
        <>
            <h1>{todo.title}</h1>
            {todo.completed && <p>Done</p>}
        </>
    )
}

export default TodoItem