import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form className={styles.newtask}>
      <textarea 
        name="comment"
        placeholder="Adicione uma nova tarefa"
        required
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