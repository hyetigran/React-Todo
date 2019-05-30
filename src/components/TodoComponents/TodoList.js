import React from 'react';
import './Todo.css';

function TodoList({ toDoList, removeItemHandler, onToggle }) {
	return (
		<div>
			<h3>My ToDo List:</h3>
			{toDoList.map(el => (
				<div key={el.id}>
					{el.task}
					<button onClick={() => removeItemHandler(el.id)}>Clear</button>
				</div>
			))}
		</div>
	);
}

export default TodoList;

//onToggle={onToggle ? onToggle : null} className={'someClass'}
