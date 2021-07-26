import styled from "styled-components";
import { ReactComponent as Loupe } from "../images/loupe.svg";

function SearchBar(props) {
  return (
    <Bar>
      <input type="text" name="query" />
      <button>
        <Loupe width={16} height={16} fill="#828282" />
      </button>
    </Bar>
  );
}

const Bar = styled.form`
  display: flex;
  width: 80%;
  height: 60%;
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  input {
    flex: 1;
    border: 1px solid #d3d3d3;
    border-right: 0;
  }
  button {
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: #e9e9e9;
    }
  }
`;

export default SearchBar;
