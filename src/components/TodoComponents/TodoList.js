import React from 'react';
import './Todo.css';

function TodoList({ toDoList, onToggle }) {
	return (
		<div>
			<h3>My ToDo List:</h3>
			{toDoList.map(el => <div key={el.id}>{el.task}</div>)}
		</div>
	);
}

export default TodoList;

//onToggle={onToggle ? onToggle : null} className={'someClass'}
