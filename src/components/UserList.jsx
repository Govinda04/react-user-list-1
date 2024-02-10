import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const UserCard = styled.div`
  background-color: #222;
  margin: 20px;
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

const UserList = (props) => {

  const [processedUsersData, setProcessedUsersData] = useState([]);

  const getUserList = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("--data: ", data);
        // setUserlistData(data);
        processUserData(data);
        return data;
      });

    // console.log("res: ", res);
  };

  const processUserData = (userData) => {
    const _userData = {};

    userData.map((_u) => {
      if (_u.userId) {
        const { id, title, body } = _u;

        // console.log(id, title, body);
        if (_userData[_u.userId]) {
          _userData[_u.userId].push({
            id,
            title,
            body,
          });
        } else {
          _userData[_u.userId] = [{ id, title, body }];
        }
      }
    });

    setProcessedUsersData(_userData);
  };

  useEffect(() => {
    getUserList();
  }, []);

  //   useEffect(() => {
  //     console.log("processedUsersData: ", processedUsersData);
  //   }, [processedUsersData]);

  const renderUserPostList = (users) => {
    let _listData = [];
    for (const [key, value] of Object.entries(users)) {
      _listData.push(renderUserPosts(key, value));
    }

    return _listData;
  };
  const renderUserPosts = (userId, posts) => {
    return (
      <UserCard key={`user-${userId}`}>
        <h2 style={{ textAlign: "left", margin: 30 }}>
          Posts of User-{userId}:
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {posts.map((post) => (
            <Card key={`post-${post.id}`} post={post} />
          ))}
        </div>
      </UserCard>
    );
  };

  return (
    <div>
      <h1>Post Page</h1>
      {renderUserPostList(processedUsersData)}
    </div>
  );
};

export default UserList;
