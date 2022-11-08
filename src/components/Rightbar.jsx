import React from "react";
import { FaPhoenixFramework, FaSearch } from "react-icons/fa";
import "./Rightbar.css";
const Rightbar = () => {
  const trends = [
    {
      img: "img.png",
      text: "Learn how to build a Web3 FPS game using unity...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-space-fps-game/",
    },
    {
      img: "img1.png",
      text: "The fisrt Moralis Project! Let's Netflix and chill...",
      link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    },
    {
      img: "img.png",
      text: "Master DeFi in 2022. Start  at the Moralis Academy...",
      link: "https://academy.moralis.io/courses/defi-101",
    },
    {
      img: "img1.png",
      text: "Become a Web3 Developer with just simple JS...",
      link: "https://academy.moralis.io/all-courses",
    },
    {
      img: "img.png",
      text: "Best youtube channel to learn about Web3...",
      link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    },
  ];
  return (
    <>
      <div className="rightbarContent">
        <input placeholder="Search Pigea" />
      </div>
      <div className="trends">
        <h3>News For You</h3>
        {trends.map((e) => {
          return (
            <div
              key={e.text}
              className="trend"
              onClick={() => window.open(e.link)}
            >
              <img src={e.img} className="trendImg" alt="" />
              <div className="trendText">{e.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rightbar;
