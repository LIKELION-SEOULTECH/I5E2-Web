import styles from "./StatusModal.module.css";

const StatusModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.title}>FAILURE</h3>
        <div className={styles.contentArea}>
          <p>Wrong Password!</p>
        </div>
        <button className={styles.Btn}>Close</button>
      </div>
    </div>
  );
};

export default StatusModal;
