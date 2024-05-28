import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilter = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill={props.color}
      d="M5.5 13.167h14v-2.334h-14zM2 5v2.333h21V5zm8.167 14h4.666v-2.333h-4.666z"
    />
  </Svg>
);
export default SvgFilter;
