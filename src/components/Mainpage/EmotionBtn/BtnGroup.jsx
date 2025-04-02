import { emotionInfo } from "/src/constants/emotionInfo";
import EmotionBtn from "./EmotionBtn";
import styles from "./BtnGroup.module.css";

const BtnGroup = () => {
  return (
    <>
      <div className={styles.BtnWrap}>
        {Object.entries(emotionInfo).map(([emotion, { emoji, color }]) => (
          <EmotionBtn key={emotion} emotion={emoji} count={0} bgc={color} />
        ))}
      </div>
    </>
  );
};

export default BtnGroup;
