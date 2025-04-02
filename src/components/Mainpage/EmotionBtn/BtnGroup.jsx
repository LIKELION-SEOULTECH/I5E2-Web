import { emotionInfo } from "/src/constants/emotionInfo";
import EmotionBtn from "./EmotionBtn";
import styles from "./BtnGroup.module.css";

const BtnGroup = ({ emotionCount, selectedEmotion, toggleEmotion }) => {
  return (
    <>
      <div className={styles.BtnWrap}>
        {Object.entries(emotionInfo).map(([emotion, { emoji, color }]) => (
          <EmotionBtn
            key={emotion}
            emotion={emoji}
            count={emotionCount[emotion]}
            bgc={color}
            isSelected={selectedEmotion === emotion}
            onClick={() => toggleEmotion(emotion)}
          />
        ))}
      </div>
    </>
  );
};

export default BtnGroup;
