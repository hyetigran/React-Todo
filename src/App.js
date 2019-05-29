import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import uuid from 'uuid';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoList: [],
			toDoTask: 'Enter your task'
		};
	}
	changeHandler = event => {
		this.setState({
			toDoTask: event.target.value
		});
	};
	// selectHandler = event => {
	// 	this.setState({
	// 		toDoTask: ''
	// 	});
	// };
	addTaskHandler = () => {
		const newTask = {
			id: uuid(),
			task: this.state.toDoTask
		};
		const newToDoList = this.state.toDoList.concat(newTask);

		this.setState({
			toDoList: newToDoList,
			toDoTask: 'Enter Your Task'
		});
	};

	removeItemHandler = id => {
		const newToDoList = this.state.toDoList.filter(el => el.id !== id);
		this.setState({
			friendsList: newToDoList
		});
	};

	render() {
		return (
			<div className="TodoWrapper">
				<TodoForm
					toDoList={this.state.toDoList}
					changeHandler={this.changeHandler}
					selectHandler={this.selectHandler}
					addTask={this.addTaskHandler}
					// clearItem={this.clearItem}
				/>
				<TodoList toDoList={this.state.toDoList} removeItemHandler={this.removeItemHandler} />
			</div>
		);
	}
}

export default App;
