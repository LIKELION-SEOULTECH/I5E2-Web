import React from "react";
import Header from "../components/Mainpage/Header/Header";
import InputBox from "../components/Mainpage/InputBox/InputBox";
import ListView from "../components/Mainpage/ListView/ListView";
import "../styles/Mainpage.css";
import PaginationBar from "../components/Mainpage/ListView/PageNum/PaginationBar";

function Mainpage() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <InputBox />
        <ListView />
        <PaginationBar />
      </div>
    </div>
  );
}

export default Mainpage;
