import {useState} from 'react'

const TodoInput = ({createTodo}) => {
    
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(text)
        setText('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
}

export default TodoInput