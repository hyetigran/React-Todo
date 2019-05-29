import React from 'react';
import './Todo.css';

function TodoForm({ toDoTask, changeHandler, addTask, clearItem, selectHandler }) {
	return (
		<div>
			<input value={toDoTask} onChange={changeHandler} onSelect={selectHandler} type="text" />
			<button onClick={addTask}>Add to List</button>
			<button onClick={clearItem}>Clear</button>
		</div>
	);
}

export default TodoForm;
