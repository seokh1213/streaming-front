import { useEffect, useState } from "react";
import VideoList from "../components/VideoList";

function Home(props) {
  // const [data, setData] = useState({ loading: true, videos: null });
  const [data, setData] = useState({
    loading: false,
    videos: [
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
      {
        id: 1,
        thumbnailUrl:
          "https://i.ytimg.com/vi/q1ivsU34kao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhC0AZmlvqAujO_VRMprUlXci_g",
        runtime: 1234,
        title: "제목입니다",
        profileImageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRcWlDYXu4n3_ZiSjAyKli03o2HGJ75Ws5WOnc0=s68-c-k-c0x00ffffff-no-rj",
        name: "Music Love",
        viewCnt: 2800,
        createAt: 1627299209433,
        description:"This is description. description. description. description. description. description.",
      },
    ]
  });

  useEffect(() => {
    /* call api */
  }, []);

  return (
    <div>
      {data.loading === true || data.videos === null ? (
        <div>Loading~</div>
      ) : (
        <VideoList videos={data.videos} />
      )}
    </div>
  );
}

export default Home;
