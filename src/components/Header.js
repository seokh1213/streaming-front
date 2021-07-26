import SearchBar from "./SearchBar";
import styled from "styled-components";

function Header(props) {
  return (
    <HeaderDiv>
      <SearchBar />
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
