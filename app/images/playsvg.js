import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlaySvg(props) {
  const {height, width} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 50 64" {...props}>
      <Path
        data-name="Polygon 1"
        d="M44.736 28.631a4 4 0 010 6.738L6.156 60.06A4 4 0 010 56.691V7.309A4 4 0 016.156 3.94z"
      />
    </Svg>
  );
}

export default PlaySvg;
