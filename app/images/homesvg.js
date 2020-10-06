import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 63.257 61.6" {...props}>
      <Path
        data-name="Path 58"
        d="M2.828 30.8l6.4-6.4m0 0L31.628 2l22.4 22.4m-44.8 0v32a3.2 3.2 0 003.2 3.2h9.6m32-35.2l6.4 6.4m-6.4-6.4v32a3.2 3.2 0 01-3.2 3.2h-9.6m-19.2 0a3.2 3.2 0 003.2-3.2V43.6a3.2 3.2 0 013.2-3.2h6.4a3.2 3.2 0 013.2 3.2v12.8a3.2 3.2 0 003.2 3.2m-19.2 0h19.2"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default HomeSvg
