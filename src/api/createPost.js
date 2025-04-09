import axios from "axios";

const analyzeEmotion = async (text) => {
  const response = await axios.post("http://localhost:5001/emotion", {
    text,
  });
  return response.data.emotion_name;
};

export const createPost = async ({ username, password, content }) => {
  try {
    const emotion = await analyzeEmotion(content); // Flask에서 감정 분석
    const response = await axios.post("/api/v1/post", {
      username,
      password,
      content,
      emotion, // 분석 결과 전송
    });
    return response.data;
  } catch (err) {
    console.error("게시글 생성 실패", err);
    throw err;
  }
};