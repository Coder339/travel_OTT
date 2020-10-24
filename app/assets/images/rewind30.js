import * as React from "react"
import Svg, { Text, TSpan, Path } from "react-native-svg"
import { fontSize } from "../globalstyleconstants"

function Rewind30(props) {
    return (
        <Svg width={50} height={60} viewBox="0 0 51.686 53.328" {...props}>
            <Text
                transform="translate(34.503 33.443)"
                fill="#fff"
                stroke="rgba(0,0,0,0)"
                fontSize={12}
                fontFamily="Helvetica"
                letterSpacing=".04em"
            >
                <TSpan x={-14.828} y={0} fontSize={fontSize.normal}>
                    {"30"}
                </TSpan>
            </Text>
            <Path
                d="M17.918 12.931a18.1 18.1 0 1110.726 33.697 1.187 1.187 0 01-.098.005A18.119 18.119 0 018.945 30.282a1.074 1.074 0 012.14-.196 15.951 15.951 0 0017.36 14.404.813.813 0 01.094-.004 15.953 15.953 0 10-9.548-29.696l-1.278.738 3.932.725a1.074 1.074 0 11-.39 2.112l-5.973-1.101a1.787 1.787 0 01-1.36-2.356l2.033-5.726a1.073 1.073 0 012.023.718l-1.336 3.773 1.278-.738z"
                fill="#fff"
            />
        </Svg>
    )
}

export default Rewind30
