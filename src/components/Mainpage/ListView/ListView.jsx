import { useState } from "react";
import DiaryCard from "./DiaryCard/DiaryCard";
import "./ListView.css";
import dummyDiaryData from "../../../data/dummyDiaryData.json";
import LogModal from "../../Modals/LogModal";
import BtnGroup from "../EmotionBtn/BtnGroup";

function ListView() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const emotionCount = dummyDiaryData.reduce((acc, cur) => {
    acc[cur.emotion] = (acc[cur.emotion] || 0) + 1;
    return acc;
  }, {});

  const cardOpen = (card) => {
    setSelectedCard(card);
    setisModalOpen(true);
  };
  const cardClose = () => {
    setSelectedCard(null);
    setisModalOpen(false);
  };

  return (
    <>
      <BtnGroup emotionCount={emotionCount} />
      <div className="listView">
        {dummyDiaryData.map((item, index) => (
          <DiaryCard key={index} data={item} onClick={() => cardOpen(item)} />
        ))}
        {isModalOpen && (
          <LogModal cardData={selectedCard} onClose={cardClose} />
        )}
      </div>
    </>
  );
}

export default ListView;
