import { Task } from './components/Tasks';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';

import './global.css'
import { TasksInfo } from './components/TasksInfo';


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <NewTask /> 
        <main>
          <TasksInfo />
          <Task />
          <Task />
          <Task />
        </main>
      </div>

    </div>
  )
}


