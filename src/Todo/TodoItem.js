import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from './../context';


	function TodoItem ({todoItem, index, onChange}){
		const {removeTodo} = useContext(Context);
		console.log('todoItem ',{ todoItem});
		const styles={
			li:{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '.5rem 1rem',
				border: '1px solid #ccc',
				borderRadius: '4px',
				marginBottom: '.5rem'
			},
			input:{
				marginRight: '1rem'
			},
			button:{
				background: 'orange',
				borderRadius: '50%',
				color: '#fff',
				border: 'none'
			},
			done:{
				textDecoration: 'line-through'
			}
		};
		let styleThrough=[];
		if(todoItem.completed){
			styleThrough = styles.done;
			console.log(styleThrough);
		}
			return(
					<li style={styles.li}> 
						<span style={styleThrough} >
							<input type='checkbox' checked={todoItem.checked} style={styles.input} onChange={()=>onChange(todoItem.id)} />
							<strong>{++index + '. '}</strong> 
							{ todoItem.title + ' '} 
						</span>
						<button style={styles.button} onClick={()=>removeTodo(todoItem.id)}> &times; </button>
					</li>	

			)
		}

	export default TodoItem;


	TodoItem.propTypes={
		todoItem: PropTypes.object.isRequired,
		index: PropTypes.number,
		onChange: PropTypes.func.isRequired
	}