import "../DiaryCard/DiaryCard.css";
import { emotionInfo } from "/src/constants/emotionInfo";

function DiaryCard({ data }) {
  return (
    <div
      className="diary-card"
      style={{ backgroundColor: emotionInfo[data.emotion].color }}
    >
      <div className="card-top">
        <div className="top-icon">{emotionInfo[data.emotion].emoji}</div>
        <div className="top-info">
          <p className="username">{data.username}</p>
          <p className="date">{data.date}</p>
        </div>
      </div>
      <div className="cardcontent">{data.content}</div>
    </div>
  );
}

export default DiaryCard;
