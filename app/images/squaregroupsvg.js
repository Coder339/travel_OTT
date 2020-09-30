import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

function SquareGroupSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 82.784 82.784" {...props}>
      <G data-name="Group 2377" opacity={0.7} fill="none">
        <Path data-name="Path 3372" d="M0 0h82.784v82.784H0z" />
        <Rect
          data-name="Rectangle 1018"
          width={21}
          height={21}
          rx={1}
          transform="translate(13.815 13.815)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <Rect
          data-name="Rectangle 1019"
          width={21}
          height={21}
          rx={1}
          transform="translate(47.815 13.815)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <Rect
          data-name="Rectangle 1020"
          width={21}
          height={21}
          rx={1}
          transform="translate(13.815 47.815)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <Rect
          data-name="Rectangle 1021"
          width={21}
          height={21}
          rx={1}
          transform="translate(47.815 47.815)"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
      </G>
    </Svg>
  )
}

export default SquareGroupSvg
