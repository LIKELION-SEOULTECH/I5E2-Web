import styles from "./PaginationBar.module.css";
import leftIcon from "/src/assets/Icons/leftBtn.svg";
import rightIcon from "/src/assets/Icons/rightBtn.svg";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className={styles.PaginationWrap}>
      <img
        src={leftIcon}
        alt="왼쪽 버튼"
        onClick={() => currentPage > 0 && onPageChange(currentPage - 1)}
        style={{ cursor: "pointer" }}
      />
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={currentPage === num ? styles.active : ""}
        >
          {num + 1}
        </button>
      ))}
      <img
        src={rightIcon}
        alt="오른쪽 버튼"
        onClick={() => currentPage < totalPages - 1 && onPageChange(currentPage + 1)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default PaginationBar;