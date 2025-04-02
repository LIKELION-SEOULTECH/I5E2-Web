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
        <PageNum num="2" />
        <PageNum num="3" />
        <PageNum num="4" />
        <PageNum num="5" />
        <img src={rightIcon} alt="오른쪽 버튼" />
      </div>
    </>
  );
};

export default PaginationBar;
