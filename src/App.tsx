
import { TaskList } from './componentes/TaskList';
import { TaskForm } from './componentes/TaskForm';
import { useTasks } from './hooks/useTasks';
import './App.css';
import {useFirebaseApp} from 'reactfire';
import './style.css'

function App() {
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTasks();
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App" id='conte'>
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask} />
    </div>
  );
}

export default App;
