import { emotionInfo } from "/src/constants/emotionInfo";
import EmotionBtn from "./EmotionBtn";
import styles from "./BtnGroup.module.css";

const BtnGroup = ({ emotionCount }) => {
  return (
    <>
      <div className={styles.BtnWrap}>
        {Object.entries(emotionInfo).map(([emotion, { emoji, color }]) => (
          <EmotionBtn
            key={emotion}
            emotion={emoji}
            count={emotionCount[emotion]}
            bgc={color}
          />
        ))}
      </div>
    </>
  );
};

export default BtnGroup;
