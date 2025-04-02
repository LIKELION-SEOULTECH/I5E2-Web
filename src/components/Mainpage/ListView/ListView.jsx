import { useState } from "react";
import DiaryCard from "./DiaryCard/DiaryCard";
import "./ListView.css";
import dummyDiaryData from "../../../data/dummyDiaryData.json";
import LogModal from "../../Modals/LogModal";

function ListView() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const cardOpen = (card) => {
    setSelectedCard(card);
    setisModalOpen(true);
  };
  const cardClose = () => {
    setSelectedCard(null);
    setisModalOpen(false);
  };
  return (
    <div className="listView">
      {dummyDiaryData.map((item, index) => (
        <DiaryCard key={index} data={item} onClick={() => cardOpen(item)} />
      ))}
      {isModalOpen && <LogModal cardData={selectedCard} onClose={cardClose} />}
    </div>
  );
}

export default ListView;
