import React from 'react';
import { Task } from './Task';

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
