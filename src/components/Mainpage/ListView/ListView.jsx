import { useState } from "react";
import DiaryCard from "./DiaryCard/DiaryCard";
import "./ListView.css";
import dummyDiaryData from "../../../data/dummyDiaryData.json";
import LogModal from "../../Modals/LogModal";
import BtnGroup from "../EmotionBtn/BtnGroup";

function ListView() {
  const [diaryData, setDiaryData] = useState(dummyDiaryData);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const emotionCount = diaryData.reduce((acc, cur) => {
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

  const toggleEmotion = (emotion) => {
    setSelectedEmotion((prev) => (prev === emotion ? null : emotion));
  };
  const filteredData = selectedEmotion
    ? diaryData.filter((item) => item.emotion === selectedEmotion)
    : diaryData;

  const deleteCard = (id) => {
    setDiaryData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <BtnGroup
        emotionCount={emotionCount}
        selectedEmotion={selectedEmotion}
        toggleEmotion={toggleEmotion}
      />
      <div className="listView">
        {filteredData.map((item, index) => (
          <DiaryCard
            key={index}
            id={item.id}
            data={item}
            onClick={() => cardOpen(item)}
          />
        ))}
        {isModalOpen && (
          <LogModal
            cardData={selectedCard}
            onClose={cardClose}
            onDelete={deleteCard}
          />
        )}
      </div>
    </>
  );
}

export default ListView;
