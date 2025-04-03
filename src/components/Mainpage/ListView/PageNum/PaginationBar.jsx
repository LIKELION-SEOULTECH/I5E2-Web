import PageNum from "./PageNum";
import styles from "./PaginationBar.module.css";
import leftIcon from "/src/assets/Icons/leftBtn.svg";
import rightIcon from "/src/assets/Icons/rightBtn.svg";

const PaginationBar = () => {
  return (
    <>
      <div className={styles.PaginationWrap}>
        <img src={leftIcon} alt="왼쪽 버튼" />
        <PageNum num="1" />
        <img src={rightIcon} alt="오른쪽 버튼" />
      </div>
    </>
  );
};

export default PaginationBar;
