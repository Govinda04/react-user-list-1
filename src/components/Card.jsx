import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  font-size: 0.8em;
  text-align: center;
  color: #a3a3a3;

  width: ${window.innerWidth / 2 - 90}px;
  height: 220px;
  border: 1px solid #393939;
  border-radius: 8px;
`;  
const CardTitle = styled.h4`
  /* font-size: 1em; */
  /* font-weight: 500; */
  color: #d4d4d4;
`;

const Card = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div>
      <CardContainer
        style={{
          overflow: "hidden",
          textAlign: "left",
          padding: 10,
          margin: 10,
        }}
      >
        {/* <div>id: {id}</div> */}
        <CardTitle>{title}</CardTitle>
        <div>{body}</div>
      </CardContainer>
    </div>
  );
};

export default Card;
