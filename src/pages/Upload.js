import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";

function Upload(props) {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if(videoFile === null || profileImageFile === null || title==="" || description==="" || name==="") {
      alert("내용을 채워주세요.")
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("profileImage", profileImageFile);
    formData.append("name", name);

    setLoading(true);

    fetch(
      "http://127.0.0.1:8080/upload/", {
        method: "POST",
        body: formData
      }
    )
    .then(resp=>resp.json())
    .then(json=>{
      if(json.status==200) {
        history.push(`/watch/${json.id}`)
      } else {
        alert("Upload를 실패하였습니다.")
      }
    })
    .catch(error=>{
      console.error(error)
      alert("Upload를 실패하였습니다.")
    })
    .finally(()=>setLoading(false))

  }

  return (
    <Container>
      {
        isLoading ? (
          <div>
            Uploading~~~
          </div>
        ) : (
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit} >
            <div id="video-form">
              <p>
                Video를 선택해주세요 :
                <input type="file" name="video" accept="video/*" onChange={(event)=>{
                  const file = event.target.files[0];
                  setVideoFile(file);
                }}/>
              </p>
              <p>
                <input type="text" name="title" placeholder="제목을 입력해주세요." onChange={(event)=>setTitle(event.target.value)} value={title}/>
              </p>
              <p>
                <textarea name="description" rows="5" placeholder="내용을 입력해주세요." onChange={(event)=>setDescription(event.target.value)} value={description}/>
              </p>
            </div>
            <div id="profile-form">
              <p>
                Profile을 선택해주세요 :
                <input type="file" name="profileImage" accept="image/*" onChange={(event)=>{
                  const file = event.target.files[0];
                  setProfileImageFile(file);
                }}/>
              </p>
              <p>
                <input type="text" name="name" placeholder="이름을 적어주세요." onChange={(event)=>setName(event.target.value)} value={name}/>
              </p>
            </div>
            <button type="submit">Upload!</button>
          </form>
        )
      }
    </Container>
  );
}

const Container = styled.div`
    padding: 10px 20px;
    font-size:16px;
    p {
      display:flex;
      align-items: flex-end;
      margin-bottom:10px;
    }
    input, textarea {
      flex:1;
      resize: none;
      border: 1px solid #aaaaaa;
    }
    input[type="file"] {
      margin-left:20px;
      border:0px;
    }
`;

export default Upload;
