import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';


export default function Home() 
{
    const [todos,setTodos] = useState([]);

    const todoHandler = (todo) => {
        console.log(todo);
        setTodos([...todos, todo]);
    };

    


    return(
        <div>
             <Container maxWidth="xs" style={{marginTop: '16px'}}>
        <Form/>
        <List sx={{ width: '100%', marginTop: '10px'}}>
        {todos.map( (todo)=> {
            
            <div style={{ marginTop: '10px'}}>
                <TodoItem />
            </div>
            
        })}

        </List>
        
    </Container>
        </div>
    )
        
    
}