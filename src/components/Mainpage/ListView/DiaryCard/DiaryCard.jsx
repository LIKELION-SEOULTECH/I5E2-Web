import "../DiaryCard/DiaryCard.css";
import { emotionInfo } from "/src/constants/emotionInfo";

function DiaryCard({ data, onClick }) {
  return (
    <div
      className="diary-card"
      style={{ backgroundColor: emotionInfo[data.emotion].color }}
      onClick={onClick}
    >
      <div className="card-top">
        <div className="top-icon">{emotionInfo[data.emotion].emoji}</div>
        <div className="top-info">
          <span className="username">{data.username}</span>
          <span className="date">{data.date}</span>
        </div>
      </div>
      <div className="cardcontent">{data.content}</div>
    </div>
  );
}

export default DiaryCard;
