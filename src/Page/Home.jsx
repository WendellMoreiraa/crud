import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';


export default function Home() 
{
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) => {
        
        setTodos(
            [...todos, todo]
            );
    };

    const deleteTodo = (id) => {
        console.log(id);
        var filtered = todos.filter((todo) => todo.id !== id); 
        setTodos(filtered);
    }

    const editTodo = (id, editedText) => {
        var todosArray = [...todos]
        todosArray.splice(id,1,{text:editedText,id:id})
        setTodos(todosArray)
    }



    return(
        <>
             <Container maxWidth="xs" style={{marginTop: '16px'}}>
        <Form addTodo ={addTodo} />
        <List sx={{ width: '100%', marginTop: '10px'}}>
        {todos.map( (todo) => (
            <div key={todo.id} style={{ marginTop: '10px'}}>
              <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
            </div>
        ))}
        </List>

    </Container>
        </>
    )
        
    
}