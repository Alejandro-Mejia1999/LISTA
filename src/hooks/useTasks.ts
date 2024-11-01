import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConf';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'Lista'));
      const tasksData = querySnapshot.docs.map((doc, index) => ({
        id: index + 1,
        text: doc.data().text,
        completed: doc.data().completed,
      })) as Task[];
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  const addTask = async (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    await addDoc(collection(db, 'Lista'), { text, completed: false });
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = async (id: number) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (taskToDelete) {
      const firestoreDoc = await getDocs(collection(db, 'Lista'));
      firestoreDoc.docs.forEach((docItem) => {
        if (docItem.data().text === taskToDelete.text) {
          deleteDoc(doc(db, 'Lista', docItem.id));
        }
      });
    }
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = async (id: number) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (taskToToggle) {
      const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
      const firestoreDoc = await getDocs(collection(db, 'Lista'));
      firestoreDoc.docs.forEach((docItem) => {
        if (docItem.data().text === taskToToggle.text) {
          updateDoc(doc(db, 'Lista', docItem.id), { completed: updatedTask.completed });
        }
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    }
  };

  const markTaskAsCompleted = async (id: number) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    if (taskToComplete && !taskToComplete.completed) {
      const firestoreDoc = await getDocs(collection(db, 'Lista'));
      firestoreDoc.docs.forEach((docItem) => {
        if (docItem.data().text === taskToComplete.text) {
          updateDoc(doc(db, 'Lista', docItem.id), { completed: true });
        }
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    }
  };

  const editTask = async (id: number, newText: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      const firestoreDoc = await getDocs(collection(db, 'Lista'));
      firestoreDoc.docs.forEach((docItem) => {
        if (docItem.data().text === taskToEdit.text) {
          updateDoc(doc(db, 'Lista', docItem.id), { text: newText });
        }
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
      );
    }
  };

  return { tasks, addTask, deleteTask, toggleTask, editTask, markTaskAsCompleted };
};
