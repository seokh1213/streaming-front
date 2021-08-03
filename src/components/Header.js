import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UploadIcon from "./UploadIcon";
import styled from "styled-components";

function Header(props) {
  return (
    <HeaderDiv>
      <Logo />
      <SearchBar />
      <UploadIcon />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 5vh;
  max-height: 50px;
  min-height: 30px;
`;

export default Header;
