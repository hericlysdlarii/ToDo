import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form className={styles.newtask}>
      <input 
        type="text" 
        autoComplete="off"
        placeholder="Adicione uma nova tarefa"
        name="task"
        // value={tasks}
        // onChange={handleTaskChange}
      />

      <footer>
        <button type="submit">
          Criar 
          <PlusCircle size={16} weight="bold" />
        </button>
      </footer>
    </form>
  );
}