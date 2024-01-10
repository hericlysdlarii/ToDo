import styles from './Tasks.module.css';
import { Trash } from 'phosphor-react';


export function Task() {
  return (
    <article className={styles.tasks}>
      <div className={styles.content}>

        <header>

          <label className={styles.container}>
            <input 
              type="checkbox"
              // readOnly
              // checked={task.isComplete}
              // onClick={handleCheckCompletedTask}  
            />
            <span className={styles.checkmark}></span>
          </label>

          <p>Terminar o desafio.  Terminar o desafio. Terminar o desafio. Terminar o desafio. Terminar o desafio.</p>
          
          <button title="Deletar tarefa">
            <Trash size={24}/>
          </button>

        </header>

      </div>
    </article>
  );
}