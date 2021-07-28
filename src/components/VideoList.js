import Video from "./Video";
import styled from "styled-components";

function VideoList({ videos,  direction="column"}) {
  return (
    <List direction={direction}>
      {videos.map((video, i) => (
        <Video key={i} {...video} direction={direction}/>
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
