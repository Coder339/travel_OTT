import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function WatchlistPlusSvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 61.6 61.6" {...props}>
      <Path
        data-name="Path 3375"
        d="M30.8 21.2v9.6m0 0v9.6m0-9.6h9.6m-9.6 0h-9.6m38.4 0A28.8 28.8 0 1130.8 2a28.8 28.8 0 0128.8 28.8z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        opacity={0.7}
      />
    </Svg>
  );
}

export default WatchlistPlusSvg;
