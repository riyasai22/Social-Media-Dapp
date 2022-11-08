import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultImgs";
import { FaImage, FaCube } from "react-icons/fa";
import { useState, useRef } from "react";
import axios from "axios";
import TweetInFeed from "../components/TweetInFeed";
import { useEffect } from "react";

const Home = ({account,contract}) => {
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageList, setImageList] = useState([]);

  const onImageClick = () => {
    inputFile.current.click();
  };
  const changeHandler = (e) => {
    const img = e.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };
  const [fileImg, setFileImg] = useState(null);
  const [text, setText] = useState("");

  const fetchFromIPFS = async () => {
    console.log("change");
    const resFile = await axios({
      method: "get",
      url: "https://api.pinata.cloud/data/pinList?status=pinned",
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
      setImageList(data.rows); 
    } else {
      console.log("no");
    }
  };
  const changeText = (e) => {
    setText(e.target.value);
  };
  const uploadPost=async(ImgHash)=>{
    console.log(ImgHash)
    const response = await axios({
      method: "get",
      url: `https://api.pinata.cloud/ipfs/${ImgHash.IpfsHash}`,
      headers: {
        pinata_api_key: "0283b67f7ec83e501b79",
        pinata_secret_api_key:
          "6b49b944b77ee60aaedbb2304d76e433b012e8f7c9bffe64e1b2af6becfb28f0",
        "Content-Type": "multipart/form-data",
      },
    });
    let data=await response.json();
    console.log(data)
    // const post={
    //   "tweeter":account,
    //   "id":data,
    //   "tweetTxt":text,
    //   "tweetImg":data.rows.ipfs_pin_hash
    // }
    // return ;
  }

  const sendFileToIPFS = async (e) => {
    e.preventDefault();
    console.log("send");
    if (fileImg) {
      try {
        console.log(fileImg);
        const formData = new FormData();
        //const readableStreamForFile = fs.createReadStream(fileImg);

        formData.append("file", fileImg);
        console.log(typeof formData);
        console.log(text);
        const options = {
          pinataMetadata: {
            keyvalues: {
              name: fileImg.name,
              tweet: text,
            },
          },
        };
        const data = {
          readableStreamForFile: formData,
          options: options,
        };
        // formData.append("options", options);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "0283b67f7ec83e501b79",
            pinata_secret_api_key:
              "6b49b944b77ee60aaedbb2304d76e433b012e8f7c9bffe64e1b2af6becfb28f0",
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(resFile)
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        uploadPost(resFile.data);
        return ImgHash;
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchFromIPFS();
  }, [selectedFile]);
  useEffect(()=>{
    console.log(selectedFile);
  },[selectedFile])
  return (
    <>
      <div className="pageIdentify">Home</div>
      <div className="mainContent">
        <div className="profileTweet">
          <img src={defaultImgs[0]} alt="pp" className="profilePic" />
        </div>
        <form onSubmit={sendFileToIPFS}>
          <div className="other">
            <div className="tweetBox">
              {/* <textarea placeholder="GM World"></textarea> */}
              {selectedFile && (
                <img src={selectedFile} alt="" className="tweetImg" />
              )}
            </div>
            <div className="imgOrTweet">
              <div className="imgDiv" onClick={onImageClick}>
                <input
                  type="file"
                  name="file"
                  ref={inputFile}
                  onChange={(e) => {
                    setSelectedFile(URL.createObjectURL(e.target.files[0]))
                    setFileImg(e.target.files[0])
                  }}
                  style={{ display: "none" }}
                />
                <FaImage />
              </div>
              <input type="text" placeholder="Whats on your mind?" onChange={changeText} />

              <div className="tweetOptions">
                <button
                  className="tweet"
                  type="submit"
                  style={{ backgroundColor: "#3ea9e2" }}
                >
                  Post
                </button>
                <div className="tweet" style={{ backgroundColor: "#8247e5" }}>
                  <FaCube />
                </div>
              </div>
            </div>
          </div>
        </form>

        <TweetInFeed profile={false} imageList={imageList} />
      </div>
    </>
  );
};

export default Home;
