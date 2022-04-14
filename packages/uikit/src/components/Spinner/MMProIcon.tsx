import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 42 85" {...props}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37 29.1V18.7H36.4V29.1H32L25.3 35.8V15.8H21V0H20.4V15.8H16V35.8L9.3 29.1H4.9V18.7H4.3V29.1H0V56H4.3V70.6H4.9V56H9.3V40.2L16 46.9V63.9H20.4V84.1H21V63.9H25.3V46.9L32 40.2V56H36.4V70.6H37V56H41.3V29.1H37Z" fill="#33CC66"/>
      </svg>
    </Svg>
  );
};

export default Icon;
