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
import {View, TextInput,Text,StyleSheet, TouchableOpacity, Animated, TouchableHighlight} from 'react-native';
import {colors} from '../../assets/globalstyleconstants';

import StartMenuBarItem from './startmenubaritem';

import TVEventHandler from 'react-native';
export default class StartMenuBar extends PureComponent {
  

  constructor(props) {
    super(props);
    
    const exitArray = Array(12).fill('');
    this.state = {
      drawerfocused: false,
      menufocused:false,
      drawerExit:exitArray,
  
    };
    this.menuonFocus = this.menuonFocus.bind(this);
    this.menuonBlur = this.menuonBlur.bind(this);
  }

  menuonFocus() {
    this.setState({
      menufocused: true,
    });
    this.setState({drawerfocused:true})
    // console.log('menu',this.state.menufocused)
    // console.log('draw',this.state.drawerfocused)
  }
  menuonBlur() {
    this.setState({
      menufocused: false,
    });
    // this.setState({drawerfocused:false})
    // console.log('menublur',this.state.menufocused)
  }

  // draweronFocus=()=> {
  //   // alert('focused');
  //   this.setState({
  //     drawerfocused: true,
  //   });
  // }
  draweronBlur=()=> {
    this.setState({
      drawerfocused: false,
    });
    this.setState({
      menufocused: false,
    });
  }


  render() {
    const { draweronFocus,drawerfocused,menufocused,drawerExit } = this.state
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        underlayColor={false}
        onPress={()=>{this.draweronBlur()}}
        // onFocus={this.draweronFocus}
        onBlur={
          this.draweronBlur
        }
        // hasTVPreferredFocus={true}
        style={[
          styles.container,
          {
            width: this.state.drawerfocused ? 150 : 50,
          },
        ]}>
        <View>
        <TouchableHighlight 
                onFocus={this.draweronBlur} 
                activeOpacity={0}
                style={{opacity:0}}
                underlayColor={false}>
                <Text style={{color:'white',marginTop:10}}>exit</Text>
        </TouchableHighlight>
        <View style={{flexDirection:'row'}}>
            <View>
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="search"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="home"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="squaregroup"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="tv"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="watchlistplus"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
              <StartMenuBarItem
                menuonFocus={this.menuonFocus}
                menuonBlur={this.menuonBlur}
                svgType="power"
                width={this.state.drawerfocused ? 150 : 50}
                draweronFocus={draweronFocus}
                drawerfocused={drawerfocused}
                menufocused={menufocused}
              />
            </View>
            <View>
              {drawerExit.map((item,index)=>
              <View key={index}>

                <TouchableHighlight 
                  onFocus={this.draweronBlur} 
                  activeOpacity={0}
                  style={{opacity:0}}
                  underlayColor={false}>
                  <Text style={{color:'white',marginTop:10}}>exit</Text>
                </TouchableHighlight>
              </View>
              )}
              
            </View>
          </View>
          <TouchableHighlight 
                onFocus={this.draweronBlur} 
                activeOpacity={0}
                style={{opacity:0}}
                underlayColor={false}>
                <Text style={{color:'white',marginTop:10}}>exit</Text>
          </TouchableHighlight>
        </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: colors.backgroundColor,
    opacity: 0.8,
    height: 1000,
    // width:150
  },
});