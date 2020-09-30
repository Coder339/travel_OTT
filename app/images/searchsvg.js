import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 62.428 62.428" {...props}>
      <Path
        data-name="Path 59"
        d="M59.6 59.6L40.4 40.4m6.4-16A22.4 22.4 0 1124.4 2a22.4 22.4 0 0122.4 22.4z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        opacity={0.7}
      />
    </Svg>
  )
}

export default SearchSvg
