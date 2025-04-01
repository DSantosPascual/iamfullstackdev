import React, {useState} from "react";

const InputCreate = () => {
    const [task, setTask] = useState('');
    const [message, setMessage] = useState('')

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {title:task};

        try{
            const response = await fetch('http://localhost:3000/create', {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
              })
              if(response.ok){
                setTask('')
                setMessage('Se ha añadido una nueva Task a la BBDD')
              }else{
                setMessage('Error, no se ha podido añadir una nueva Task')
    
              }
        }catch (error){
            setMessage(error.message)
        }
        
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={handleInput} placeholder="Introduce una tarea"></input>
            <button type='submit'>Add task</button>
        </form>
        {message && <p>{message}</p>}
      </>
   
    );
  };
  
  export default InputCreate;
  