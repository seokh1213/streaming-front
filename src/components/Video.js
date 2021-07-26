import styled from "styled-components";
import { Link } from "react-router-dom";

function Video({
  id,
  thumbnailUrl,
  runtime,
  title,
  profileImageUrl,
  name,
  viewCnt,
  createAt,
}) {
  const convertSeconds = (runtime) => {
    const hours = Math.floor(runtime / 3600);
    const hourString = hours === 0 ? "" : `${hours}:`;
    const minutes = Math.floor((runtime - hours * 60) / 60);
    const minuteString = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
    const seconds = Math.floor(runtime % 60);
    return hourString + minuteString + seconds;
  };
  const convertUnits = (target, units, fixed = 1) => {
    for (let [unit, unitString] of units) {
      if (target / unit >= 1) {
        return (target / unit).toFixed(fixed) + unitString;
      }
    }
  };
  const convertViewCnt = (viewCnt) => {
    const units = [
      [100000000, "억"],
      [10000, "만"],
      [1000, "천"],
      [1, ""],
    ];
    return convertUnits(viewCnt, units);
  };
  const convertTimestamp = (timestamp) => {
    const units = [
      [365 * 24 * 60 * 60 * 1000, "년 전"],
      [30 * 24 * 60 * 60 * 1000, "개월 전"],
      [7 * 24 * 60 * 60 * 1000, "주 전"],
      [24 * 60 * 60 * 1000, "일 전"],
      [60 * 60 * 1000, "시간 전"],
      [60 * 1000, "분 전"],
      [1000, "초 전"],
    ];
    return convertUnits(new Date() - timestamp, units, 0);
  };

  return (
    <VideoCard>
      <Link to={`/watch/${id}`}>
        <div id="thumbnail">
          <img alt="thumbnail image" src={thumbnailUrl} />
          <div>{convertSeconds(runtime)}</div>
        </div>
        <div id="info">
          <img alt="profile" src={profileImageUrl} />
          <div>
            <p id="title">{title}</p>
            <p id="name">{name}</p>
            <p id="meta">
              <span>{convertViewCnt(viewCnt)}</span>
              <span>{convertTimestamp(createAt)}</span>
            </p>
          </div>
        </div>
      </Link>
    </VideoCard>
  );
}

const VideoCard = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px 5px;
  @media screen and (min-width: 768px) {
    width: calc(33% - 10px);
  }
  @media screen and (min-width: 1000px) {
    width: calc(25% - 10px);
  }
  @media screen and (min-width: 1400px) {
    width: calc(20% - 10px);
  }
  #thumbnail {
    position: relative;
    img {
      width: 100%;
    }
    div {
      position: absolute;
      bottom: 7px;
      right: 5px;
      padding: 3px;
      background-color: #000000;
      color: #ffffff;
      font-size: 12px;
      border-radius: 2px;
    }
  }
  #info {
    display: flex;
    margin-top: 5px;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      align-self: center;
      margin: 0 10px;
    }
    div {
      flex: 1;
      color: #606060;
      font-size: 14px;
      #title {
        color: #030303;
        margin-bottom: 5px;
      }
      #meta {
        span:nth-child(1) {
          ::after {
            content: "•";
            margin: 0 4px;
          }
        }
      }
    }
  }
`;

export default Video;
