import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FourkSvg(props) {
    const{height,width} = props
  return (
    <Svg width={width} height={height}  viewBox="0 0 48.001 34" {...props}>
      <Path
        data-name="Subtraction 1"
        d="M44 34H4a4 4 0 01-4-4V4a4 4 0 014-4h40a4 4 0 014 4v26a4 4 0 01-4 4zM29.576 19.108v.2l4.908 7.038h3.893l-6.819-9.817 6.2-8.033h-4.035l-6.405 8.287V8.5h-3.525v17.85h3.524v-4.309l2.256-2.931zM16.582 8.5L9.6 19.184v2.984h6.981v4.182h3.363v-4.182h1.843v-2.984h-1.842V8.5h-3.363zm0 10.684h-4.056l4.055-6.2v6.2z"
        fill="#fff"
        opacity={0.5}
      />
    </Svg>
  )
}

export default FourkSvg
