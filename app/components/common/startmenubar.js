// import React, {PureComponent} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableHighlight,
//   TouchableOpacity,
// } from 'react-native';
// import {colors, globalstyles} from '../../assets/globalstyleconstants';

// import SearchSvg from '../../images/searchsvg';
// import HomeSvg from '../../images/homesvg';
// import SquareGroupSvg from '../../images/squaregroupsvg';
// import TvSvg from '../../images/tvsvg';
// import WatchlistPlusSvg from '../../images/watchlistplussvg';
// import PowerSvg from '../../images/powersvg';

// export default class StartMenuBar extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       focused: false,
//       searchFocus: false,
//       HomeFocus: false,
//     };
//     this.onFocus = this.onFocus.bind(this);
//     this.onBlur = this.onBlur.bind(this);
//   }

//   onFocus(name) {
//     // alert('focused');
//     this.setState({
//       [name]: true,
//     });
//   }
//   onBlur(name) {
//     // alert('Blured');
//     name === 'focused' && alert('blured');
//     this.setState({
//       [name]: false,
//     });
//   }

//   render() {
//     const sizing = {width: 60, height: 55};
//     return (
//       <React.Fragment>
//         <TouchableHighlight
//           activeOpacity={0.1}
//           underlayColor="white"
//           onFocus={() => this.onFocus('focused')}
//           onBlur={() => this.onBlur('focused')}
//           style={[
//             styles.container,
//             {
//               width:
//                 (!this.state.HomeFocus && !this.state.searchFocus) ? 60 : 150,
//             },
//           ]}>
//           <View style={[styles.containerItems]}>
//             <TouchableOpacity
//               onFocus={() => this.onFocus('searchFocus')}
//               onBlur={() => this.onBlur('searchFocus')}
//               style={[
//                 styles.innerContainerItems,
//                 this.state.searchFocus
//                   ? [globalstyles.focusMenuBar]
//                   : [globalstyles.blurMenuBar],
//               ]}>
//               <SearchSvg width={20} height={20} />
//             </TouchableOpacity>

//             <TouchableOpacity
//               onFocus={() => this.onFocus('HomeFocus')}
//               onBlur={() => this.onBlur('HomeFocus')}
//               style={[
//                 styles.innerContainerItems,
//                 this.state.HomeFocus
//                   ? [globalstyles.focusMenuBar]
//                   : [globalstyles.blurMenuBar],
//               ]}>
//               <HomeSvg width="20" height="20" />
//             </TouchableOpacity>

//             <TouchableOpacity
//             // style={[
//             //   styles.innerContainerItems,
//             //   this.state.focused
//             //     ? [globalstyles.focusMenuBar]
//             //     : [globalstyles.blurMenuBar],
//             // ]}
//             >
//               <SquareGroupSvg width="20" height="20" />
//             </TouchableOpacity>

//             <TouchableOpacity
//             // style={[
//             //   styles.innerContainerItems,
//             //   this.state.focused
//             //     ? [globalstyles.focusMenuBar]
//             //     : [globalstyles.blurMenuBar],
//             // ]}
//             >
//               <TvSvg width="20" height="20" />
//             </TouchableOpacity>

//             <TouchableOpacity
//             // style={[
//             //   styles.innerContainerItems,
//             //   this.state.focused
//             //     ? [globalstyles.focusMenuBar]
//             //     : [globalstyles.blurMenuBar],
//             // ]}
//             >
//               <WatchlistPlusSvg width="20" height="20" />
//             </TouchableOpacity>

//             <TouchableOpacity
//             // style={[
//             //   styles.innerContainerItems,
//             //   this.state.focused
//             //     ? [globalstyles.focusMenuBar]
//             //     : [globalstyles.blurMenuBar],
//             // ]}
//             >
//               <PowerSvg width="25" height="25" />
//             </TouchableOpacity>
//           </View>
//         </TouchableHighlight>
//       </React.Fragment>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 100,
//     backgroundColor: colors.backgroundColor,
//     opacity: 0.8,
//     height: 1000,
//   },
//   svgs: {flexDirection: 'row'},
//   titles: {paddingLeft: 20},
//   titleColor: {color: colors.white},
//   containerItems: {
//     paddingLeft: 15,
//     paddingRight: 15,
//     flex: 1,
//   },
//   innerContainerItems: {
//     paddingTop: 10,
//     paddingBottom: 35,
//   },
// });

import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';

import StartMenuBarItem from './startmenubaritem';

export default class StartMenuBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    // alert('focused');
    this.setState({
      focused: true,
    });
  }
  onBlur() {
    // alert('Blured');
    this.setState({
      focused: false,
    });
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.1}
        underlayColor="white"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        style={[
          styles.container,
          {
            // width: this.state.focused ? 150 : 60,
            // borderWidth: this.state.focused ? 0 : 1,
            // borderColor: colors.travelred,
          },
        ]}>
        <React.Fragment>
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="search"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="home"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="squaregroup"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="tv"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="watchlistplus"
            width={this.state.focused ? 150 : 50}
          />
          <StartMenuBarItem
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            svgType="power"
            width={this.state.focused ? 150 : 50}
          />
        </React.Fragment>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: colors.backgroundColor,
    opacity: 0.8,
    height: 1000,
  },
});
