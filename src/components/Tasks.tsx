import styles from './Tasks.module.css';

export function Task() {
  return (
    <article className={styles.tasks}>
      <div className={styles.content}>

        <p>Terminar o desafio</p>
        
      </div>
    </article>
  );
}