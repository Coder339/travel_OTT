import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HDSvg(props) {
    const{height,width} = props
  return (
    <Svg width={width} height={height}  viewBox="0 0 48.001 34" {...props}>
      <Path
        data-name="Subtraction 2"
        d="M44 34H4a4 4 0 01-4-4V4a4 4 0 014-4h40a4 4 0 014 4v26a4 4 0 01-4 4zM25.745 9.323v16.3h6.438c4.624 0 7.17-2.95 7.17-8.308 0-5.078-2.613-7.991-7.17-7.991zm-13.609 9.73h6.108v6.569h3.888V9.334h-3.887v6.389h-6.108V9.334h-3.9v16.288h3.9v-6.568zm19.346 3.239h-1.838v-9.639h1.838c2.478 0 3.9 1.728 3.9 4.74-.001 3.207-1.349 4.899-3.9 4.899z"
        fill="#fff"
        opacity={0.5}
      />
    </Svg>
  )
}

export default HDSvg
