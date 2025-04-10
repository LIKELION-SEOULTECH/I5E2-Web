import closeIcon from "/src/assets/Icons/close.svg";
import deleteIcon from "/src/assets/Icons/trash.svg";
import styles from "./LogModal.module.css";
import { emotionInfo } from "/src/constants/emotionInfo";
import { useState } from "react";
import DeleteModal from "../Modals/DeleteModal";

const LogModal = ({ cardData, onClose, onDelete, onPostSubmit }) => {
  const [deleteBtnClick, setDeleteBtnClick] = useState(false);

  const openDeleteModal = () => {
    setDeleteBtnClick(true);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modalContainer}>
          <div className={styles.close}>
            <img
              src={closeIcon}
              alt="닫기 버튼"
              className={styles.closeIcon}
              onClick={onClose}
            />
          </div>

          <div className={styles.dataInfo}>
            <b>{cardData.date}</b>
            <p>{cardData.username}</p>
          </div>

          <div className={styles.cardContent}>{cardData.content}</div>

          <div className={styles.emojiWrap}>
            <b>텍스트 감정 분석 결과</b>
            <div
              className={styles.emoji}
              style={{ backgroundColor: emotionInfo[cardData.emotion].color }}
            >
              {emotionInfo[cardData.emotion].emoji}
            </div>
          </div>

          <div className={styles.delete} onClick={openDeleteModal}>
            <img
              src={deleteIcon}
              alt="삭제 버튼"
              className={styles.deleteIcon}
            />
          </div>
        </div>
      </div>
      {deleteBtnClick && (
        <DeleteModal
          onClose={onClose}
          onDelete={(id) => onDelete(id)}
          cardData={cardData}
          onPostSubmit = {onPostSubmit}
        />
      )}
    </>
  );
};

export default LogModal;
