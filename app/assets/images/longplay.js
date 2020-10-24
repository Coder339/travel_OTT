import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LongPlay(props) {
    return (
        <Svg width={21.499} height={16} viewBox="0 0 21.499 16" {...props}>
            <Path
                d="M3.401 7.001h18.1v2h-18.1l5.52 5.573-1.41 1.427L.293 8.713a1.017 1.017 0 010-1.428L7.508.001l1.415 1.428z"
                fill="#fff"
            />
        </Svg>
    )
}

export default LongPlay
