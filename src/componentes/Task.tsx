import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import './Form.css'
interface TaskProps {
    task: { id: number; text: string; completed: boolean };
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle, onEdit }) => {
    const handleToggle = () => {
    onToggle(task.id);
};

const handleDelete = () => {
    onDelete(task.id);
};

const handleEdit = () => {
    const newText = prompt('Editar Tarea:', task.text);
    if (newText && onEdit) {
    onEdit(task.id, newText);
    }
};

  // Función para completar la tarea, cambiando el estado de completed
    const handleComplete = () => {
    onToggle(task.id);
};

return (
    <div className={`task ${task.completed ? 'completed' : ''}`} id='form1'>
    <span onClick={handleToggle} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} id='p1'>
        {task.text}
    </span>
   
    <div>
    <button onClick={handleEdit} id='btn1'>
        <FaEdit />
    </button>
    <button onClick={handleDelete} id='btn1'>
        <FaTrash />
    </button>
        <button onClick={handleComplete} id='btn1'>
            <FaCheck/>
        </button>
    </div>
    </div>
    );
};
