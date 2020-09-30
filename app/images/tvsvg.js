import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function TvSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 61.6 59.228" {...props}>
      <G
        data-name="Group 2323"
        transform="translate(2 2.828)"
        opacity={0.7}
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <Rect
          data-name="Rectangle 969"
          width={57.6}
          height={41.373}
          rx={2}
          transform="translate(0 13.027)"
        />
        <Path data-name="Path 3366" d="M40.801 0L28.023 12.815 15.245 0" />
      </G>
    </Svg>
  )
}

export default TvSvg
