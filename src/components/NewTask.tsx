import styles from './NewTask.module.css';

// import addLogo from '../assets/add.svg';

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
          Criar +
          {/* <img src={addLogo} alt="+" />  */}
        </button>
      </footer>
    </form>
  );
}