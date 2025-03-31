import CommonModal from "./CommonModal";

var isSuccess = true; //일단
const StatusModal = () => {
  const modalStyle = isSuccess
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
