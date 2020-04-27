//

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
	text: string;
	complete: boolean;
}

interface ITodo2 extends ITodo {
	tags: string[];
}

export default function App(): JSX.Element {
	const [value, setValue] = useState<string>('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const handleSubmit = (e: FormElement): void => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	const addTodo = (text: string): void => {
		const newTodos: ITodo[] = [...todos, { text, complete: false }];
		setTodos(newTodos);
	};

	const completeTodo = (index: number): void => {
		const newTodos: ITodo[] = [...todos];
		newTodos[index].complete = !newTodos[index].complete;
		setTodos(newTodos);
	};

	const deleteTodo = (index: number): void => {
		console.log('index ', index, ' todos ', todos);
		// const newTodos: ITodo[] = todos.filter((todo: ITodo, idx: number) => idx !== index);
		const newTodos: ITodo[] = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	console.log('todos ', todos);
	return (
		<Fragment>
			<h1>Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={value} onChange={e => setValue(e.target.value)} required />
				<button type="submit">Add Todo</button>
			</form>
			<section>
				{todos.map((todo: ITodo, index: number) => (
					<Fragment key={index}>
						<div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
						<button type="button" onClick={() => completeTodo(index)}>
							{todo.complete ? 'Incomplete' : 'Complete'}
						</button>
						<button onClick={() => deleteTodo(index)}>&times;</button>
					</Fragment>
				))}
			</section>
		</Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
export default function App(): JSX.Element {
	const sum = (a: number, b: number): number => a + b;
	return <h1>Hello, sum(10,15) is {sum(10, 15)}</h1>;
}
*/
