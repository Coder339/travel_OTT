import * as React from "react"
import Svg, { Text, TSpan, Path } from "react-native-svg"
import { fontSize } from "../globalstyleconstants"

function Forward30(props) {
    return (
        <Svg width={50} height={60} viewBox="0 0 51.686 53.328" {...props}>
            <Text
                transform="translate(32.503 33.443)"
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
                d="M33.773 12.93A18.1 18.1 0 1023.045 46.63c.033.003.066.005.098.005a18.119 18.119 0 0019.601-16.35 1.074 1.074 0 00-2.14-.197 15.951 15.951 0 01-17.361 14.404.813.813 0 00-.094-.004 15.953 15.953 0 119.544-29.698l1.28.739-3.937.722a1.076 1.076 0 10.396 2.115l5.975-1.102a1.787 1.787 0 001.36-2.355l-2.033-5.726a1.076 1.076 0 00-2.03.715l1.337 3.774-1.277-.737z"
                fill="#fff"
            />
        </Svg>
    )
}

export default Forward30
