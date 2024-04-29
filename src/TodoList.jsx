import { useState } from "react";
import ReactDOM from 'react-dom'

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if (newTask !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("")
        }
    }

    const taskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const taskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, idx) => idx !== index))

    }
    return <div className="container">
        <h1>To-Do</h1>
        <div className="input-box" >
            <input type="text" value={newTask} onChange={handleChange} placeholder="Add Task" />
            <button className="add-btn" onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, idx) =>
                <li key={idx}>{task}
                    <div className="btn-container">
                        <button className="delete-btn" onClick={() => deleteTask(idx)}>Delete</button>
                        <button className="up-btn" onClick={() => taskUp(idx)}>Up</button>
                        <button className="down-btn" onClick={() => taskDown(idx)}>Down</button>
                    </div>
                </li>
            )}
        </ol>

    </div>
}