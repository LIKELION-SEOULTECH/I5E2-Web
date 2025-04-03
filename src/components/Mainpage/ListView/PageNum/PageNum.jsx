import styles from "./PageNum.module.css";
const PageNum = ({ num }) => {
  return (
    <>
      <div className={styles.numBtn}>{num}</div>
    </>
  );
};

export default PageNum;
