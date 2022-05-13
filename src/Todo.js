import {useState} from "react";


function Todo(){
    
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');
    
    function generateId(){
        return Date.now();
    }

    function saveTodoHandler(e){
        e.preventDefault();
        if (!activity) {
            return setMessage('The activity field is required');
        }
        if (edit.id){
            const updatedTodo = {
                ...edit,
                activity
            }
            // setEdit(updatedTodo);
            // get index
            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id === edit.id;
            });

            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;
            setTodos(updatedTodos);
            
            return cancelEditHandler();
        }
        setTodos([...todos, {
            id: generateId(),
            activity,
            done: false
        }]);
        setActivity('');
    }

    function cancelEditHandler(){
        setEdit({});
        setActivity('');
    }

    function removeTodoHandler(todoId){
        const filteredTodos = todos.filter(todo=>{
            return todo.id !== todoId;
        });
        setTodos(filteredTodos);

        if (edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo){
        setActivity(todo.activity);
        setEdit(todo);
        setMessage('');
    }

    function doneTodoHandler(todo){
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex(function(currentTodo){
            return currentTodo.id === todo.id;
        });

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;
        return setTodos(updatedTodos);
    }

    return(
        <>
            <h1>Simple Todo list</h1>
            {message && <div style={{ color: "red" }}><p>{message}</p></div>}
            <form action="#" method="post" onSubmit={saveTodoHandler}>
                <label htmlFor="activity" style={{ display: "block" }}>Please input your todo</label>
                <input type="text" value={activity} name="activity" id="activity" placeholder="Activity Name" onChange={(event)=>{
                    setActivity(event.target.value);
                    setMessage('');
                }}/>
                <button className="submit" type="submit">{
                    edit.id ? 'save' : 'add a todo'
                }</button>
                {edit.id && <button onClick={cancelEditHandler}>Cancel Edit</button>}
            </form>
            {todos.length > 0 ?
            <ul>
                {todos.map(todo=>{
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" className="checklist" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)} />
                            {todo.activity}
                        ({todo.done ? 'Selesai' : 'Belum Selesai'})
                        <button onClick={editTodoHandler.bind(this, todo)} className="editButton"></button>
                        <button onClick={removeTodoHandler.bind(this, todo.id)} className="deleteButton">delete a Todo</button>
                        </li>
                    )
                })}
            </ul>
            :
                <i>There is nothing todo here!</i>
            }
        </>
    );

}

export default Todo;