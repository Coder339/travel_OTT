import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Refresh(props) {
    return (
        <Svg width={40} height={40} viewBox="0 0 51.686 53.328" {...props}>
            <Path
                d="M17.918 12.932A18.1 18.1 0 1128.644 46.63a1.187 1.187 0 01-.098.005A18.119 18.119 0 018.945 30.283a1.074 1.074 0 012.14-.196 15.951 15.951 0 0017.36 14.404.813.813 0 01.094-.004 15.953 15.953 0 10-9.548-29.696l-1.278.738 3.932.725a1.074 1.074 0 11-.39 2.112l-5.973-1.101a1.787 1.787 0 01-1.36-2.356l2.033-5.726a1.073 1.073 0 012.023.718l-1.336 3.773 1.278-.738z"
                fill="#fff"
            />
        </Svg>
    )
}

export default Refresh
