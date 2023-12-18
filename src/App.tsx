import { Task } from './Task';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css'
import { NewTask } from './components/NewTask';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <NewTask /> 
        <main>
          <Task 
            content="Terminar o desafio do Ignite"
          />
          <Task 
            content="Não ficar louco"
          />
        </main>
      </div>

    </div>
  )
}


