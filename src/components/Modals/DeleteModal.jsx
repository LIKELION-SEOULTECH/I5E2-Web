import { useState } from "react";
import CommonModal from "./CommonModal";
import styles from "./DeleteModal.module.css";
import closeIcon from "/src/assets/Icons/close.svg";
import StatusModal from "./StatusModal";
import { deletePost } from "../../api/deletePost";

const DeleteModal = ({ onClose, onDelete, cardData, onPostSubmit }) => {
  const btnStyle = { color: "#F24822", bgc: "#FFB7B7" };
  const [password, setPassword] = useState("");
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  const openStatusModal = async () => {
    try {
      const response = await deletePost(cardData.postId, password); 

      if (response.status === 200) {
        window.isSuccess = true;
        onDelete(cardData.id); 
      } else {
        window.isSuccess = false;
      }
    } catch (error) {
      window.isSuccess = false;
      console.error("Error deleting post:", error);
    }

    setStatusModalOpen(true);
  };
  const closeStatusModal = () => {
    setStatusModalOpen(false);
    onClose(); 
    onPostSubmit();
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
