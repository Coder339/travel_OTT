import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function WatchlistMinusSvg(props) {
  const{height,width} = props
  return (
     <Svg  width={width} height={height}  className="prefix__ionicon" viewBox="0 0 512 512" {...props}>
     <Path
       d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
       fill="none"
       stroke="#fff"
       strokeMiterlimit={10}
       strokeWidth={32}
       opacity={0.7}
     />
     <Path
       fill="none"
       stroke="#fff"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={32}
       d="M336 256H176"
       opacity={0.7}
     />
   </Svg>
  )
}

export default WatchlistMinusSvg
