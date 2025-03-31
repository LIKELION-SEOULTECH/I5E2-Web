import closeIcon from "/src/assets/Icons/close.svg";
import deleteIcon from "/src/assets/Icons/trash.svg";
import styles from "./LogModal.module.css";

const LogModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.close}>
          <img src={closeIcon} alt="닫기 버튼" className={styles.closeIcon} />
        </div>

        <div className={styles.dataInfo}>
          <b>2024.03.31 (일) 15:09</b>
          <p>맛있는군고구마123</p>
        </div>

        <div className={styles.cardContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className={styles.emojiWrap}>
          <b>텍스트 감정 분석 결과</b>
          <div className={styles.emoji}>😀</div>
        </div>

        <div className={styles.delete}>
          <img src={deleteIcon} alt="삭제 버튼" className={styles.deleteIcon} />
        </div>
      </div>
    </div>
  );
};

export default LogModal;
