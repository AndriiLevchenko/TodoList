import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList (props){

	const styles={
		ul:{
			listStyle: 'none',
			margin: 0,
			padding: 0
		}
	}
	return(
		<ul style={styles.ul}>
		{props.todos.map((todoItem, index)=>{
			return <TodoItem key={todoItem.id} todoItem={todoItem} index={index} onChange={props.onToggle} />
		}
		)}
		</ul>	
	)
}

export default TodoList;

TodoList.propTypes={
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
}