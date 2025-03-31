import styles from "./CommonModal.module.css";

const CommonModal = ({ title, btnText, btnColor, btnBgc, children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.contentArea}>{children}</div>
        <button
          className={styles.Btn}
          style={{ backgroundColor: btnBgc, color: btnColor }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default CommonModal;
