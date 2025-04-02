import DiaryCard from "./DiaryCard/DiaryCard";
import "./ListView.css";
import dummyDiaryData from "../../../data/dummyDiaryData.json";

function ListView() {
  return (
    <div className="listView">
      {dummyDiaryData.map((item, index) => (
        <DiaryCard key={index} data={item} />
      ))}
    </div>
  );
}

export default ListView;
