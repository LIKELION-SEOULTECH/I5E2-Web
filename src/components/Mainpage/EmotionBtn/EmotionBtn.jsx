import styles from "./EmotionBtn.module.css";

const EmotionBtn = ({ emotion, count, bgc }) => {
  return (
    <button style={{ backgroundColor: bgc }}>
      <span>{emotion}</span>
      <span className={styles.count}>{count}</span>
    </button>
  );
};

export default EmotionBtn;
