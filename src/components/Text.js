import React from "react";
import styled from "styled-components";

const Text = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export default styled(Text)``;
