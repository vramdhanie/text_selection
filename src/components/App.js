import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";

function App({ className }) {
  const [book, setBook] = useState(`The cause of universal education, 
  which has already enlisted in its service an army of dedicated 
  people from every faith and nation, deserves the utmost support 
  that the governments of the world can lend it. For ignorance is 
  indisputably the principal reason for the decline and fall of peoples 
  and the perpetuation of prejudice. No nation can achieve success 
  unless education is accorded all its citizens. Lack of resources 
  limits the ability of many nations to fulfill this necessity, imposing 
  a certain ordering of priorities. The decision-making agencies involved 
  would do well to consider giving first priority to the education of 
  women and girls, since it is through educated mothers that the benefits 
  of knowledge can be most effectively and rapidly diffused throughout society. 
  In keeping with the requirements of the times, consideration should also 
  be given to teaching the concept of world citizenship as part of the 
  standard education of every child.`);
  return (
    <div className={className}>
      <div className="main">
        <Text text={book} />
      </div>
      <div className="sideBar">
        <div className="comments">Some comments here</div>
        <div className="addComments">
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default styled(App)`
  display: flex;
  padding: 3px;

  .main {
    flex: 5;
  }

  .sideBar {
    flex: 1;
  }
`;
