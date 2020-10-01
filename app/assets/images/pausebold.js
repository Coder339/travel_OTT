import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function PauseBold(props) {
    return (
        <Svg width={28.234} height={33} viewBox="0 0 28.234 29.548" {...props}>
            <G
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={3}
                data-name="Play &gt; Pause"
            >
                <Path data-name="Path 46" d="M1.5 2.747v23.876" />
                <Path data-name="Path 47" d="M14.909 2.807l.206 23.937" />
                <Path data-name="Path 48" d="M14.928 2.982l.12 23.707" />
            </G>
        </Svg>
    )
}

export default PauseBold
