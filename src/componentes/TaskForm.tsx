import React, { useState } from 'react';
import {FaDownload} from 'react-icons/fa';
import './Form.css'
interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nueva tarea"
        id='text-T'
      />
      <button type="submit" id='btn1'><FaDownload/></button>
    </form>
  );
};
