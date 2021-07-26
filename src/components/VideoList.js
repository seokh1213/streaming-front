import Video from "./Video";
import styled from "styled-components";

function VideoList({ videos }) {
  return (
    <List>
      {videos.map((video, i) => (
        <Video key={i} {...video} />
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export default VideoList;
