import styles from './TasksInfo.module.css';

export function TasksInfo() {
  return (
    <header className={styles.infos}>
      <div className={styles.createdTasks}>
        <strong>Tarefas Criadas</strong>
        <div>5</div>
      </div>

      <div className={styles.concluded}>
      <strong>Concluídas</strong>
      <div>2 de 5</div>
      </div> 
    </header>
  )
}