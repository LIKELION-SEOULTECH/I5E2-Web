import CommonModal from "./CommonModal";
import styles from "./DeleteModal.module.css";
import closeIcon from "/src/assets/Icons/close.svg";

const DeleteModal = () => {
  const btnStyle = { color: "#F24822", bgc: "#FFB7B7" };
  return (
    <>
      <CommonModal
        title="DELETE"
        btnText="Delete"
        btnColor={btnStyle.color}
        btnBgc={btnStyle.bgc}
      >
        <div className={styles.close}>
          <img src={closeIcon} alt="닫기 버튼" className={styles.closeIcon} />
        </div>
        <p>Enter your password</p>
        <input placeholder="Password"></input>
      </CommonModal>
    </>
  );
};

export default DeleteModal;
