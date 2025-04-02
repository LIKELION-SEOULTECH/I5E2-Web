import { useState } from "react";
import CommonModal from "./CommonModal";
import styles from "./DeleteModal.module.css";
import closeIcon from "/src/assets/Icons/close.svg";
import StatusModal from "./StatusModal";

const DeleteModal = ({ onClose, onDelete, cardData }) => {
  const btnStyle = { color: "#F24822", bgc: "#FFB7B7" };
  const [password, setPassword] = useState("");
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  const openStatusModal = () => {
    password === "1234"
      ? (window.isSuccess = true)
      : (window.isSuccess = false);
    setStatusModalOpen(true);

    window.isSuccess && onDelete(cardData.id);
  };

  const closeStatusModal = () => {
    setStatusModalOpen(false);
    onClose(); // DeleteModal까지 닫기
  };

  return (
    <>
      <CommonModal
        title="DELETE"
        btnText="Delete"
        btnColor={btnStyle.color}
        btnBgc={btnStyle.bgc}
        onClick={openStatusModal}
      >
        <div className={styles.close} onClick={onClose}>
          <img src={closeIcon} alt="닫기 버튼" className={styles.closeIcon} />
        </div>
        <p>Enter your password</p>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </CommonModal>
      {statusModalOpen && <StatusModal onClose={closeStatusModal} />}
    </>
  );
};

export default DeleteModal;
