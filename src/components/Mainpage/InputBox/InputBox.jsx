import React, { useState } from "react";
import "../InputBox/InputBox.css";
import { createPost } from "../../../api/createPost"; 

function InputBox() {
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await createPost({ username, password, content });
      alert("게시글이 등록되었습니다!");
      // 입력 초기화
      setContent("");
      setUsername("");
      setPassword("");
    } catch (e) {
      console.error("게시글 등록 실패:", e);
    }
  };

  return (
    <div className="InputBox">
      <textarea
        className="inputdiary"
        placeholder="Text here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="buttonArea">
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="submitButton" onClick={handleSubmit}>
          SUBMIT
        </div>
      </div>
    </div>
  );
}

export default InputBox;