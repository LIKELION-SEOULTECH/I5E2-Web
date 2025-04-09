import axios from "axios";

const analyzeEmotion = async (text) => {
  const response = await axios.post("http://localhost:5001/emotion", {
    text,
  });
  return response.data.emotion_name;
};

export const createPost = async ({ username, password, content }) => {
  try {
    const emotion = "중립"; 
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