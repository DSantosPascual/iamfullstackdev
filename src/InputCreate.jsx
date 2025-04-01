const InputCreate = ({ refreshTasks }) => {
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title: task };

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setTask('');
        setMessage('Se ha añadido una nueva Task a la BBDD');
        refreshTasks(); // <--- Actualiza la lista de tareas
      } else {
        setMessage('Error, no se ha podido añadir una nueva Task');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Introduce una tarea" />
        <button type="submit">Add task</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default InputCreate;

  