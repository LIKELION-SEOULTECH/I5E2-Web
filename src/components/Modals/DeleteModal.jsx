import styles from "./DeleteModal.jsx.module.css";
import closeIcon from "/src/assets/Icons/close.svg";

const DeleteModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.close}>
          <img src={closeIcon} alt="닫기 버튼" className={styles.closeIcon} />
        </div>
        <h3 className={styles.title}>DELETE</h3>
        <div className={styles.contentArea}>
          <p>Enter your password</p>
          <input placeholder="Password"></input>
        </div>
        <button className={styles.Btn}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteModal;
