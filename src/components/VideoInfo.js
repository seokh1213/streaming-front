import styled from "styled-components";
import {useState} from "react";

function VideoInfo({meta: {title, viewCnt, createAt, description, creator: {name, profileImageUrl}}}) {
  const [fold, setFold] = useState(true);

  return (
    <VideoInfoDiv fold={fold}>
      <div id="video-info">
        <p id="title">{title}</p>
        <p id="meta">
          <span>조회수 {viewCnt}</span>
          <span>{createAt}</span>
        </p>
      </div>
      <div id="creator-info">
        <img alt="profile" src={profileImageUrl}/>
        <p>{name}</p>
      </div>
      <div id="video-description">
        {description}
      </div>
      {
        fold ? (
          <p id="control-fold" onClick={()=>fold && setFold(false)}>더보기</p>
        ):(
          <p id="control-fold" onClick={()=>!fold && setFold(true)}>간략히</p>
        )
      }
    </VideoInfoDiv>
  );
}

const VideoInfoDiv = styled.div`
  padding:24px;
  font-size: 14px;
  #video-info {
    ::after {
        content: "";
        display: block;
        width: 100%;
        height:1px;
        background-color: #e0e0e0;
        margin: 15px 0;
      }
    #title {
      font-size: 18px;
      margin-bottom:10px;
    }
    #meta {
      color: #606060;
      span:nth-child(1) {
        ::after {
          content: "•";
          margin: 0 4px;
        }
      }
    }
  }
  #creator-info {
    display: flex;
    margin-bottom: 20px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 16px;
    }
    p {
      padding-top:10px;
      font-weight: bold;
    }
  }
  #video-description {
    white-space: pre-wrap;
    max-height: ${props=>props.fold?"80px":""};
    overflow: hidden;
  }
  p#control-fold {
    margin-top:10px;
    color: #606060;
    cursor: pointer;
  }
`;

export default VideoInfo;
