import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Loupe } from "../images/loupe.svg";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const onSubmit=(event)=>{
    event.preventDefault();
    history.push(`/search/?query=${query}`);
  }

  return (
    <Bar onSubmit={onSubmit}>
      <input value={query} onChange={event=>setQuery(event.target.value)} type="text" name="query" placeholder="검색" />
      <button type="submit">
        <Loupe width={16} height={16} fill="#828282" />
      </button>
    </Bar>
  );
}

const Bar = styled.form`
  margin:auto;
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
    padding: 3px 6px;
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
