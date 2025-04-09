import axios from "axios";

const analyzeEmotion = async (text) => {
  const response = await axios.post("/emotion", {
    text,
  });
  return response.data.emotion_name;
};

export const createPost = async ({ username, password, content }) => {
  try {
    const emotion = await analyzeEmotion(content); 
    const response = await axios.post("/api/v1/post", {
      username,
      password,
      content,
      emotion, 
    });
    return response.data;
  } catch (err) {
    console.error("게시글 생성 실패", err);
    throw err;
  }
};