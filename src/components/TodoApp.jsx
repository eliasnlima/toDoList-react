import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () =>{

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const add = (e) => {
        e.preventDefault();

        if (input.trim() !== ""){

            const newTodo = {
                id: Date.now(),
                text: input
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])

       
            setInput("");
        }
    }

    const excluir = (id) => {

        setTodos((prevTodos) => 
            prevTodos.filter((todo) => todo.id !== id)
        )
    }


    return (
        <div className="appContainer">
            <h1 className="title">TodoApp</h1>

            <div>
                <form onSubmit={add} className="form-container">
                    <input type="text" className="input-field" placeholder="Digite sua tarefa" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    <input type="submit" value="Adicionar" className="add-button"></input>
                </form>
            </div>

            {todos.length === 0 && <p className="empty">Não há tarefas</p>}

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">{todo.text}
                    <button onClick={() => excluir(todo.id)} className="btn-excluir">Excluir</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;