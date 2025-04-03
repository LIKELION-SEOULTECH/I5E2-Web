import CommonModal from "./CommonModal";

const StatusModal = ({ onClose }) => {
  const modalStyle = window.isSuccess
    ? {
        title: "SUCCESS",
        text: "Delete successfully",
        color: "#00AE17",
        bgc: "#CCFF9C",
      }
    : {
        title: "FAILURE",
        text: "Wrong Password!",
        color: "#F24822",
        bgc: "#FFB7B7",
      };

  return (
    <>
      <CommonModal
        onClick={onClose}
        title={modalStyle.title}
        btnText="Close"
        btnColor={modalStyle.color}
        btnBgc={modalStyle.bgc}
      >
        {modalStyle.text}
      </CommonModal>
    </>
  );
};

export default StatusModal;
