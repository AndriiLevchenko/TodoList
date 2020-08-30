import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
//import AddTodo from './Todo/AddTodo';
import Context from './context';
import Preloader from './Preloader';

const AddTodo=React.lazy(() => import('./Todo/AddTodo'));

function App(){
	const [todos, setTodos]=React.useState(
		[
			{id: '1', completed: false, title: 'to write an article on the website'},
			{id: '2', completed: false, title: 'to wipe water in the WC'},
			{id: '3', completed: false, title: 'to clean yellow blames in the bathroom'},
			{id: '4', completed: false, title: 'to send a latter to ConsumeService'}
		]
	);
	const [loading, setLoading]=React.useState(true);
				useEffect(() => {
					fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			  			.then(response => response.json())
			 			.then(todos => {
			  				setTimeout(()=>{
	//		  					setTodos(todos);
			  					setLoading(false);
			  				}, 2000)
			  			});
				}, [])
	function onToggle(id){
		console.log('todo Id', id);
		setTodos(todos.map(todo=>{
			if(todo.id===id){
				todo.completed=!todo.completed;
			}
		return todo
		}));
	}
	function removeTodo(id){
		setTodos(todos.filter(todo => todo.id !== id));
	}
	function addTodo(title){
		setTodos(todos.concat([{
			title,
			id: Date.now(),
			completed: false
		}]))
	}

  return (
  	<Context.Provider value={{ removeTodo }}>
	    <div className="wraper">
	    	<h1> Todo list  </h1>
	    	<React.Suspense fallback={<Preloader />}>
	    		<AddTodo onCreate={addTodo} />
	    	</React.Suspense>
	    	{loading && <Preloader /> }
	    	{todos.length ? <TodoList todos={todos} onToggle={onToggle} /> : loading ? null : <p> Nothing to do</p>}
	    </div>
	</Context.Provider>
  )
}

export default App;
