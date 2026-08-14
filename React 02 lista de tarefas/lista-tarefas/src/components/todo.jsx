const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <>
        <div className="todo" key={todo.id} style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div>
                <p className="todo-text">{todo.text}</p>
                <p className="todo-category">{todo.category}</p>
            </div>

            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}>
                    Completar
                </button>
                <button className="delete" onClick={() => removeTodo(todo.id)}>
                    Deletar
                </button>
            </div>
        </div>
        </>
    )
}

export default Todo