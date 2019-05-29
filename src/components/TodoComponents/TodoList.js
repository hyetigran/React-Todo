// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

function TodoList({ toDoList }) {
	return (
		<div>
			<h3>My ToDo List:</h3>
			{toDoList.map(el => <div key={el.id}>{el.task}</div>)}
		</div>
	);
}

export default TodoList;
