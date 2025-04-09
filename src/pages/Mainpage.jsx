import React, { useState } from "react";
import Header from "../components/Mainpage/Header/Header";
import InputBox from "../components/Mainpage/InputBox/InputBox";
import ListView from "../components/Mainpage/ListView/ListView";
import "../styles/Mainpage.css";
import PaginationBar from "../components/Mainpage/ListView/PageNum/PaginationBar";

function Mainpage() {
  const [reloadTrigger, setReloadTrigger] = useState(false);

  return (
    <div className="main">
      <Header />
      <div className="content">
        <InputBox onPostSubmit={() => setReloadTrigger(prev => !prev)} />
        <ListView />
      </div>
    </div>
  );
}

export default Mainpage;
