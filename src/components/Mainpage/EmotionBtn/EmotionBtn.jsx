import styles from "./EmotionBtn.module.css";

const EmotionBtn = ({ emotion, count, bgc, isSelected, onClick }) => {
  return (
    <button
      className={isSelected ? styles.selectedBtn : null}
      style={{ backgroundColor: bgc }}
      onClick={onClick}
    >
      <span>{emotion}</span>
      <span className={styles.count}>{count}</span>
    </button>
  );
};

export default EmotionBtn;
