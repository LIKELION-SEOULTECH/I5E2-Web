import React, { useState } from "react";
import "../InputBox/InputBox.css";
import { createPost } from "../../../api/createPost"; 

function InputBox({onPostSubmit}) {
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await createPost({ username, password, content });
      setContent("");
      setUsername("");
      setPassword("");

      onPostSubmit();
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