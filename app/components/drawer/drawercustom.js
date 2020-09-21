import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { colors, fontSize, elevationShadowStyle, fontFamily } from '../../assets/globalstyleconstants'
// import HomeSvg from '../../assets/images/homesvg'
// import SearchSvg from '../../assets/images/searchsvg'
// import MoreSvg from '../../assets/images/moresvg'
// import DownloadSvg from '../../assets/images/downloadsvg'
// import NextHalfArrow from '../../assets/images/nexthalfarrow'
// import NextWhiteSvg from '../../assets/images/nextwhitesvg'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import { setImageUrl } from '../../assets/globalstyleconstants'
import ProgressiveImage from '../common/progressiveimage'
let iconSize = 15;

export default class DrawerCustom extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            currentRoute: 'Home',
            focused: false,
            drawerOpened: false
        }
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.expandDrawer = this.expandDrawer.bind(this);
    }

    onFocus() {
        this.setState({
            focused: true
        })
    }
    onBlur() {
        this.setState({
            focused: false
        })
    }

    onClick(route) {
        this.setState({
            currentRoute: route
        })
        this.props.navigation.navigate(route)
    }

    expandDrawer() {
        this.props.navigation.toggleDrawer();
        this.setState({
            drawerOpened: !this.state.drawerOpened
        },()=> console.log(this.state.drawerOpened,' drwr'))
    }

    render() {
        console.log(this.props, ' drawer props')
        const { currentRoute, focused, drawerOpened } = this.state;
        return (
            <View style={{ flex: 1 }}>

                <DrawerContentScrollView 
                
                style={[styles.container, { width: drawerOpened ? 'auto' : 70 }]}>

                    {/* <View style={styles.nextArrow} onTouchStart={this.expandDrawer}>
                        {!drawerOpened && <NextHalfArrow fill={colors.white} width={7} height={10} />}
                        {drawerOpened && <NextWhiteSvg />}
                    </View> */}

                    <TouchableOpacity style={styles.selectedPicCircle} onPress={this.expandDrawer}>
                        <ProgressiveImage
                            style={styles.profileImage}
                            thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                            source={{ uri: setImageUrl('https://i.pravatar.cc/300', 800, 600) }}
                        />
                    </TouchableOpacity>

                    <DrawerItem
                        style={currentRoute === 'Home' ? [styles.selectedTab, styles.tabStyle] : styles.tabStyle}
                        onPress={() => this.onClick('Home')} label='Home'
                         
                        labelStyle={currentRoute === 'Home' ? [styles.textStyle, styles.selectedText] : styles.textStyle}
                    // icon={props => <HomeSvg width={iconSize} height={iconSize} fill={currentRoute === 'Home' ? colors.highlight : colors.subtitle} />} 
                    />

                    <DrawerItem
                        style={currentRoute === 'Search' ? [styles.selectedTab, styles.tabStyle] : styles.tabStyle}
                        onPress={() => this.onClick('Search')} label={'Search'}
                        labelStyle={currentRoute === 'Search' ? [styles.textStyle, styles.selectedText] : styles.textStyle}
                    // icon={props => <SearchSvg width={iconSize} height={iconSize} fill={currentRoute === 'Search' ? colors.highlight : colors.subtitle} />} 
                    />

                    <DrawerItem
                        style={currentRoute === 'More' ? [styles.selectedTab, styles.tabStyle] : styles.tabStyle}
                        onPress={() => this.onClick('More')} label={'More'}
                        labelStyle={currentRoute === 'More' ? [styles.textStyle, styles.selectedText] : styles.textStyle}
                    // icon={props => <MoreSvg width={iconSize} height={iconSize} fill={currentRoute === 'More' ? colors.highlight : colors.subtitle} />} 
                    />

                    <DrawerItem
                        style={currentRoute === 'Download' ? [styles.selectedTab, styles.tabStyle] : styles.tabStyle}
                        onPress={() => this.onClick('Download')} label={'Download'}
                        labelStyle={currentRoute === 'Download' ? [styles.textStyle, styles.selectedText] : styles.textStyle}
                    // icon={props => <DownloadSvg width={iconSize} height={iconSize} fill={currentRoute === 'Download' ? colors.highlight : colors.subtitle} />} 
                    />


                </DrawerContentScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 30,
        // width: 'auto',
        backgroundColor: colors.black,
    },
    tabStyle: {
        marginBottom: 0,
        paddingLeft: 0,
    },
    selectedTab: {
        backgroundColor: colors.travelred
    },
    textStyle: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fontFamily.regular
    },
    selectedText: {
        fontFamily: fontFamily.bold
    },
    selectedPicCircle: {
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    profileImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginBottom: 0
    },
    nextArrow: {
        padding: 5,
        backgroundColor: colors.highlight,
        borderRadius: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        paddingLeft: 8
    }
})

