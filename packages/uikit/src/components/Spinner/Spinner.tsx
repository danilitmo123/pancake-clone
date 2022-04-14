import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import MMProIcon from "./MMProIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    width: 50px;
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingMMProIcon = styled(MMProIcon)`
  position: absolute;
  top: -80px;
  left: -30px;
  animation: ${rotate} 3s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingMMProIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
