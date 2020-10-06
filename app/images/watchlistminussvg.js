import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function WatchlistMinusSvg(props) {
  const{height,width} = props
  return (
    <Svg width={width} height={height} viewBox="0 0 77.023 77.023" {...props}>
      <G data-name="Group 2391" opacity={0.7} fill="none">
        <Path data-name="Path 3379" d="M0 0h77.023v77.023H0z" />
        <Circle
          data-name="Ellipse 2"
          cx={28.884}
          cy={28.884}
          r={28.884}
          transform="translate(9.628 9.628)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <Path
          data-name="Line 35"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M28.884 38.512H48.14"
        />
      </G>
    </Svg>
  )
}

export default WatchlistMinusSvg
