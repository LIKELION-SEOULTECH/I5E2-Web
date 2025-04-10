import "../DiaryCard/DiaryCard.css";
import { emotionInfo } from "/src/constants/emotionInfo";

function DiaryCard({ data, onClick }) {
  const formattedDate = new Date(data.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div
      className="diary-card"
      style={{
        backgroundColor: emotionInfo[data?.emotion]?.color || "#E0E0E0",
      }}
      onClick={onClick}
    >
      <div className="card-top">
        <div className="top-icon">
          {emotionInfo[data?.emotion]?.emoji || "😐"}
        </div>
        <div className="top-info">
          <span className="username">{data?.username || "익명"}</span>
          <span className="date">{formattedDate || "날짜 없음"}</span>
        </div>
      </div>
      <div className="cardcontent">{data?.content || "내용이 없습니다."}</div>
    </div>
  );
}

export default DiaryCard;
