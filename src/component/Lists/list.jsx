import { useState, useEffect } from "react";
// import
import { Card } from "./card";
import "./list.css";
import { Button } from "./button";

export function List() {
  const [images, setimages] = useState([]);

  function getImages() {
    let content = document.getElementById("input").value;
    let pageNo = document.getElementById("pageNo").value;

    if (pageNo === "" || pageNo === undefined) {
      pageNo = 1;
    }

    if (content === "" || content === undefined) content = "WildLife";
    
    const key=process.env.MY_ACCESS_KEY;
    const URL = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${content}&client_id=${key}`;
    fetch(URL).then((result) => {
      result.json().then((data) => {
        setimages([...images, ...data.results]);
      });
    });
  }

  return (
    <div className="list">
      <Card src="../../../public/cheeta.avif" />
      <Card src="../../../public/jungleLogo.jpg" />

      {images.map((val) => {
        return <Card src={val.urls.raw} />;
      })}
      <input
        type="text"
        id="input"
        name="content"
        placeholder="keyWord"
      ></input>
      <input type="text" id="pageNo" name="pageNo" placeholder="Pg NO"></input>
      <span onClick={getImages}>
        <Button />
      </span>
    </div>
  );
}
