import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoSvgComponent(props) {
  return (
    <Svg
      width={props.width ? props.width : 369.001}
      height={props.height ? props.height : 89.069}
      viewBox="0 0 369.001 89.069"
      {...props}
    >
      <Path
        d="M39.728 21.915h17.293v8.011c2.1-6.127 6.777-9.189 14.255-9.189l3.973.235-2.8 16.495a51.54 51.54 0 00-5.141-.471c-3.5 0-5.843.707-7.243 2.357a9.738 9.738 0 00-2.337 4.241 16.878 16.878 0 00-.7 5.419v21.679h-17.3zm62.161-.707v13.9h-.231a8.088 8.088 0 00-6.777 3.064c-1.87 2.12-2.571 4.948-2.571 8.247 0 3.535.7 6.362 2.571 8.248a8.415 8.415 0 007.01 3.3v13.667a19.745 19.745 0 01-5.375.707 17.9 17.9 0 01-14.956-7.3c-3.973-4.713-6.076-11.075-6.076-18.615s2.1-13.43 6.076-18.379c4.206-4.949 9.114-7.305 15.19-7.305a34.732 34.732 0 015.139.465zM0 21.915h7.245V9.897h17.293v12.018h11.22v14.37h-11.22v14.374c0 1.885.234 3.535.234 4.477a4.377 4.377 0 002.1 2.592 7.423 7.423 0 004.206 1.178 15.6 15.6 0 004.206-.706l2.1 11.311a41.978 41.978 0 01-6.543 2.12 48.786 48.786 0 01-6.076.472c-5.608 0-9.815-1.178-12.152-3.534-2.337-2.592-3.973-4.713-4.44-6.6-.7-1.65-.935-4.242-.935-7.776V36.285H0zm101.889 49.718V57.966a8.285 8.285 0 006.778-3.3c1.869-1.886 2.57-4.713 2.57-8.248 0-3.3-.7-6.126-2.57-8.247a9.565 9.565 0 00-6.778-3.064v-13.9a15.332 15.332 0 016.778 4.007c.467.706.934 1.649 1.636 2.828v-6.127h17.527v48.776h-17.528v-6.127a13.225 13.225 0 01-8.413 7.069zm80.157-28.511a21.752 21.752 0 00-.234 4.006 23.058 23.058 0 00.234 4.005zm0-21.207v.706l-19.63 48.07h-13.788l-19.864-48.776h18.228l6.544 19.321a8.033 8.033 0 00.7 1.886c0 .471.234 1.178.468 2.592a19.765 19.765 0 01.467 3.063 9.8 9.8 0 01.234 2.827l.935-6.126 1.169-4.242 6.543-19.321zm0 .706l.234-.706h-.234zm25.239-2.12v11.31a9.525 9.525 0 00-6.076 2.592 11.585 11.585 0 00-3.038 6.833h9.114v9.426h-9.114a11.747 11.747 0 003.272 7.069 8.7 8.7 0 005.842 2.356V72.34c-7.478 0-13.554-2.357-18.228-6.833a23.953 23.953 0 01-7.011-14.374v-8.011a25.852 25.852 0 017.011-15.08c4.907-4.949 10.983-7.306 18.228-7.541zm68.94 24.505l-17.528-23.091h20.8l4.907 7.776c1.168 1.414 1.869 3.535 2.336 6.362a37.242 37.242 0 01.7-3.77 9.62 9.62 0 011.4-2.592l4.907-7.776h20.8L297.02 45.007l19.4 25.684h-20.8l-6.543-9.426a19.543 19.543 0 01-2.337-6.6c-.467 1.414-.7 2.592-.934 3.3a17.759 17.759 0 01-1.87 3.3l-6.31 9.426h-20.8zM239.068 0h17.29v70.69h-17.291zm-31.783 50.662v-9.426h9.114c0-2.827-.7-5.184-2.337-6.833a8.592 8.592 0 00-6.31-2.592h-.468v-11.31h.468c7.478 0 13.553 2.592 18.228 7.54s7.011 11.31 7.011 19.321v3.3zm0 21.678V60.085h.7a10.272 10.272 0 005.608-1.649 13.565 13.565 0 004.207-4.713l13.788 4.948-.7 1.414a21.994 21.994 0 00-2.337 3.77q-2.1 2.828-7.712 5.656a30.391 30.391 0 01-13.086 2.827zm135.542-51.133v13.9a9 9 0 00-6.777 3.3 11.744 11.744 0 00-2.8 8.247 13.557 13.557 0 002.571 8.483 10.7 10.7 0 007.011 3.064v13.431c-3.739-.942-6.544-3.534-8.413-7.3v24.742h-17.298V21.915h17.293v6.6a11.97 11.97 0 018.413-7.308zm0 50.425v-13.43h.234a9.677 9.677 0 007.011-3.064 13.325 13.325 0 002.57-8.246 12.361 12.361 0 00-2.8-8.483 8.283 8.283 0 00-6.777-3.3h-.234v-13.9a18.2 18.2 0 015.141-.471 19.1 19.1 0 0115.19 7.069c3.973 4.477 5.843 10.6 5.843 18.38s-1.87 14.138-5.843 18.85a18.767 18.767 0 01-15.423 7.3 17.636 17.636 0 01-4.912-.704z"
        fill={props.fill ? props.fill : "#fff"}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default LogoSvgComponent