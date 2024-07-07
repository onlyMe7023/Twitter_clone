import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Search = ({width = 30, height = 30, ...props}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </Svg>
);
export default Search;
