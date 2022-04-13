import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTodoDialog({open, dialogHandle, todo, editTodo}) {
  const [editedText,setEditedText] = React.useState(todo.text)
const textHandler = () => {
    editTodo(todo.id,editedText)
    dialogHandle()
}
  return (
    

      <Dialog
        open={open}
        onClose={dialogHandle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {"Editando Tarefa"}
        </DialogTitle>
        <DialogContent>
          <TextField defaultValue={editedText} fullWidth onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandle}>Cancelar</Button>
          <Button onClick={textHandler}>
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}