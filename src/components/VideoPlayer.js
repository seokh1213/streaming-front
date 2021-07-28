import styled from "styled-components";

function VideoPlayer({src}) {
  return (
    <VideoContainer>
      <video controls src={src}></video>
    </VideoContainer>
  );
}


const VideoContainer = styled.div`
  width:100vw;
  height: 57vw;
  video {
    width:100%;
    height:100%;
  }
`;

export default VideoPlayer;
