import React, { useState ,useEffect} from "react";
import { defaultImgs } from "../defaultImgs";
import { BiMessageRounded, BiStar } from "react-icons/bi";
import { FaCube } from "react-icons/fa";
import "./TweetInFeed.css";
import axios from "axios";
const TweetInFeed = ({ profile, imageList }) => {
  if (imageList) {
    console.log(imageList);
    
    imageList.map((e) =>
    { 
      if(e.date_unpinned==null){
      console.log(e.id)
      }
    });
  }
  const [img, setImg] = useState("");
  const retrieveImg = async (e) => {
    console.log("change");
    const resFile = await axios({
      method: "get",
      url: `https://gateway.pinata.cloud/ipfs/${e.ipfs_pin_hash}`,
      headers: {
        pinata_api_key: "0283b67f7ec83e501b79",
        pinata_secret_api_key:
          "6b49b944b77ee60aaedbb2304d76e433b012e8f7c9bffe64e1b2af6becfb28f0",
        "Content-Type": "multipart/form-data",
      },
    });
    let data = resFile.data;
    if (data) {
      console.log(data);
      setImg(data);
    } else {
      console.log("no");
    }
  };
  useEffect(()=>{
    imageList.map((e)=>{
      if(e.metadata.keyvalues!=null){
        console.log(e.metadata.keyvalues['tweet'])
      }
    })

  },[])
  return (
    <>
      {imageList &&
        imageList.map((e) => (
          <div className="feedTweet" key={e.id}>
            <img src={defaultImgs[0]} alt="pp" className="profilePic" />
            <div className="completeTweet">
              <div className="who">Miksah</div>
              <div className="accWhen">{e.user_id}</div>
              <div className="tweetContent">
                {e.metadata.keyvalues!=null
                  ? e.metadata.keyvalues['tweet']
                  : "Dummy Tweet"
                }
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${e.ipfs_pin_hash}`}
                  className="tweetImg"
                  alt="img"
                />
              </div>
              <div className="interactions">
                <div className="interactionNums">
                  <BiMessageRounded />
                </div>
                <div className="interactionNums">
                  <BiStar />
                  14
                </div>
                <div className="interactionNums">
                  <FaCube />
                </div>
              </div>
            </div>
            <div className="feedTweet"></div>
          </div>
        )
          
        )}
    </>
  );
};

export default TweetInFeed;
