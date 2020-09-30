import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function PowerSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 82 82" {...props}>
      <G data-name="Group 2384" opacity={0.6} fill="none">
        <Path data-name="Path 3373" d="M0 0h82v82H0z" />
        <Path
          data-name="Path 3374"
          d="M23.917 20.5a26.479 26.479 0 1034.166 0"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <Path
          data-name="Line 27"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40.891 13.056v28.053"
        />
      </G>
    </Svg>
  )
}

export default PowerSvg
