import { useEffect, useState } from "react";
import DiaryCard from "./DiaryCard/DiaryCard";
import "./ListView.css";
import LogModal from "../../Modals/LogModal";
import PaginationBar from "./PageNum/PaginationBar";
import { fetchPagedPosts } from "../../../api/post"; // api 함수 추가
import BtnGroup from "../EmotionBtn/BtnGroup";

function ListView({ onPostSubmit, reloadTrigger }) {
  const [diaryData, setDiaryData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const PAGE_SIZE = 8;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPagedPosts(currentPage, PAGE_SIZE);
        setDiaryData(data.posts);
        setTotalPages(data.totalPages);
      } catch (e) {
        console.error(e);
      }
    };
    loadPosts();
  }, [currentPage, reloadTrigger]);

  const toggleEmotion = (emotion) => {
    setSelectedEmotion((prev) => (prev === emotion ? null : emotion));
  };

  const filteredData = selectedEmotion
    ? diaryData.filter((item) => item.emotion === selectedEmotion)
    : diaryData;

  const cardOpen = (card) => {
    setSelectedCard(card);
    setisModalOpen(true);
  };

  const cardClose = () => {
    setSelectedCard(null);
    setisModalOpen(false);
  };

  const deleteCard = (id) => {
    setDiaryData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="listView">
        {filteredData.map((item, index) => (
          <DiaryCard
            key={item.id}
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
            onPostSubmit={onPostSubmit}
          />
        )}
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default ListView;