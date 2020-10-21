import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function PlayList(props) {
  return (
    <Svg
      width={115.314}
      height={115.314}
      viewBox="0 0 115.314 115.314"
      {...props}
    >
      <Path d="M0 0h115.314v115.314H0z" fill="none" />
      <Rect
        width={78.302}
        height={78.302}
        rx={2}
        transform="translate(18.304 18.312)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Path
        transform="translate(38.643 18.312)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L0 78.302"
      />
      <Path
        transform="translate(77.285 18.312)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L0 78.302"
      />
      <Path
        transform="translate(18.304 38.65)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L20.338 0"
      />
      <Path
        transform="translate(18.304 77.292)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L20.338 0"
      />
      <Path
        transform="translate(18.304 56.954)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L78.302 0"
      />
      <Path
        transform="translate(77.285 38.65)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L19.321 0"
      />
      <Path
        transform="translate(77.285 77.292)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M0 0L19.321 0"
      />
    </Svg>
  );
}

export default PlayList;