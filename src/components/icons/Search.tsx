import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSearch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M9.429 2a7.43 7.43 0 0 1 7.428 7.429c0 1.84-.674 3.531-1.783 4.834l.309.308h.903L22 20.286 20.286 22l-5.715-5.714v-.903l-.308-.309a7.45 7.45 0 0 1-4.834 1.783A7.429 7.429 0 1 1 9.429 2m0 2.286a5.12 5.12 0 0 0-5.143 5.143 5.12 5.12 0 0 0 5.143 5.142A5.12 5.12 0 0 0 14.57 9.43 5.12 5.12 0 0 0 9.43 4.286"
    />
  </Svg>
);
export default SvgSearch;
