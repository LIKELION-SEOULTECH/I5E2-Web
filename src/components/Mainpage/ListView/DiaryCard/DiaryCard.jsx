import '../DiaryCard/DiaryCard.css';

function DiaryCard({ data }) {
  return (
    <div className="diary-card">
      <div className="date">{data.date}</div>
      <div className="cardcontent">{data.content}</div>
    </div>
  );
}

export default DiaryCard;