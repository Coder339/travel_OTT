import React from 'react';
import { Dimensions, NativeModules, StyleSheet, View, Platform, ScrollView, Text, Animated } from 'react-native';
import { colors, font, fontSize, setImageUrl, fontFamily } from '../../assets/globalstyleconstants';
import THEOplayerView from './theoplayerview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBarActive from '../common/progressbaractive'
// import LongPlay from '../../assets/images/longplay';
import PauseBold from '../../assets/images/pausebold';
import PlayBold from '../../assets/images/playbold';
import GoBack from '../../assets/images/goback';
import AudioSub from '../../assets/images/audiosub';
import PlayList from '../../assets/images/playlist';
// import Forward30 from '../../assets/images/forward30';
// import Rewind30 from '../../assets/images/rewind30';
import THEOeventEmitter from './TheoEventEmitter';
import ProgressiveImage from './progressiveimage';
import LottieView from 'lottie-react-native';
import Refresh from '../../assets/images/refresh';

const theoEventEmitter = new THEOeventEmitter();

let width = 1;
let height = 0.5;
export default class PlayerView extends React.Component {
    timer;
    constructor(props) {
        super(props)
        this.listeners = {}; // Declarate listeners

        this.state = {
            paused: false,
            showUI: true,
            remainingTime: 0,
            time: 0,
            timePercent: 0,
            isLoading: false,
            duration: 0,
            errorMsg: '',
            showBanner: true,
            seeked: 0,
            landscape: false,
            seeking: false,
            audioFocus:false,
            playListFocus:false,
        }
    }

    componentDidMount() {

        console.log(theoEventEmitter, 'event emitter')

        setTimeout(() => this.setState({
            showUI: false
        }), 3000)


        // if (!this.listeners['playing']) {
        this.listeners['playing'] = theoEventEmitter.addListener(
            'playing',
            (event) => {
                this.setState({ isLoading: false, showBanner: false })
            }
        );
        // }
        // if (!this.listeners['durationchange']) {
        this.listeners['durationchange'] = theoEventEmitter.addListener(
            'durationchange',
            (event) => this.setState({ duration: event.duration })
        );
        // }
        // if (!this.listeners['waiting']) {
        this.listeners['waiting'] = theoEventEmitter.addListener(
            'waiting',
            (event) => {
                this.setState({ isLoading: true })
            }
        );
        // }
        // if (!this.listeners['timeupdate']) {
        this.listeners['timeupdate'] = theoEventEmitter.addListener(
            'timeupdate',
            (event) => this.setState({
                time: event.currentTime,
                remainingTime: this.state.duration - event.currentTime,
                timePercent: (event.currentTime / this.state.duration) * 100,
            })
        );
        // }
        // if (!this.listeners['error']) {
        this.listeners['error'] = theoEventEmitter.addListener(
            'error',
            (event) => this.setState({ errorMsg: event.error })
        );
        // }
        // if (!this.listeners['seeked']) {
        this.listeners['seeked'] = theoEventEmitter.addListener(
            'seeked',
            (event) => this.setState({
                seeked: event.currentTime
            })
        );
        // }
    }

    componentWillUnmount() {

        console.log('event unmount')

        this.timer;
        // Remove all js listeners
        Object.keys(this.listeners).forEach(key => {
            this.listeners[key].remove();
        });
        // Remove all andoird event emmiter helper listeners
        theoEventEmitter.removeListeners();
        // this._disableTVEventHandler(); // Destroy tv event handler
        NativeModules.THEOplayerViewManager.stop();
    }


    togglePlayPause = () => {
        if (this.state.timePercent > 99.98) {
            NativeModules.THEOplayerViewManager.play();
            this.setState({
                paused: false
            })
        }
        else if (this.state.paused) {
            NativeModules.THEOplayerViewManager.play();
            this.setState({
                paused: false
            })
        } else {
            NativeModules.THEOplayerViewManager.pause();
            this.setState({
                paused: true
            })
        }
    };

    seekTo = (position) => {
        let newTime = this.state.duration * position
        NativeModules.THEOplayerViewManager.setCurrentTime(newTime);
    }

    showUI = async () => {
        clearTimeout(this.timer)
        this.setState({
            showUI: true
        }, () => this.timer = setTimeout(() => this.setState({
            showUI: false
        }), 3000))
    }

    seek = async (val) => {
        let seek = await NativeModules.THEOplayerViewManager.getCurrentTime()
        val === 'add' ? seek += 30 : seek -= 30
        NativeModules.THEOplayerViewManager.setCurrentTime(seek);
    }

    pad = (val) => {
        let newVal = val < 10 ? `0${val}` : val
        return newVal
    }

    // goBack = () => {
    //     this.props.onBack()
    // }

    seeking = (flag) => {
        if (this.state.seeked !== flag) {
            this.setState({
                seeking: flag
            })
        }
    }

    render() {
        height = Math.floor(Dimensions.get('window').height);
        width = Math.floor(Dimensions.get('window').width);
        const { poster, customPlayerstyle } = this.props;
        /*
          Problem on android fullscreen change with theoplayer scaling when ScrollView component is set
        */
        let BaseComponent = View;

        /*
          If there are scaling issues during the change of the fullscreen remove 'aspectRatio' & set player height
        */
        let playerStyle = {
            ...styles.player,
        };

        if (Platform.OS === 'android') {
            // playerStyle.width = width;
        } else {
            // playerStyle.height = height;
            BaseComponent = View;    //ScrollView
        }

        return (
            <>
                <BaseComponent style={styles.containerBase}>
                    <THEOplayerView
                        style={[playerStyle, customPlayerstyle, { width: width, height: height } ]}
                        fullscreenOrientationCoupling={false}
                        autoplay={true}
                        source={this.props.source}
                    />
                </BaseComponent>
                 {this.props.showUI &&
                    <>

                        <TouchableOpacity containerStyle={[styles.uiContainer, { height: height, width: width } ]}
                            onPress={this.showUI}>

                            {(this.state.seeking || this.state.showUI) &&
                                <Animated.View style={styles.wrapper}>

                                    <View style={styles.topContainer}>
                                        <TouchableOpacity containerStyle={styles.backIcon} onPress={this.goBack}>
                                            <GoBack width={20} height={20}/>
                                        </TouchableOpacity>
                                        <Text style={styles.showName}>Backpack S1 | E2</Text>
                                    </View>

                                    {!this.state.errorMsg && !this.state.showBanner && <>
                                        <View style={styles.centerContainer}>

                                            {/* <TouchableOpacity
                                                onPress={() => this.seek('minus')}>
                                                <Rewind30 />
                                            </TouchableOpacity> */}

                                            <TouchableOpacity onPress={this.togglePlayPause} style={{ width: 40 }}>
                                                {(this.state.timePercent < 99.98 && !this.state.isLoading && this.state.paused) &&
                                                    <PlayBold />
                                                }
                                                {(this.state.timePercent < 99.98 && !this.state.isLoading && !this.state.paused) &&
                                                    <PauseBold />
                                                }

                                                {this.state.timePercent > 99.98 && <Refresh />}

                                            </TouchableOpacity>

                                            {/* <TouchableOpacity
                                                onPress={() => this.seek('add')}>
                                                <Forward30 />
                                            </TouchableOpacity> */}
                                        </View>

                                        <View style={[styles.bottomBar, {
                                            // marginLeft: 150 ,
                                            marginRight: 20 
                                        }]}>
                                            <Text style={styles.timer}>{(this.pad(Math.floor(this.state.time / 60)) + ":" + this.pad(Math.floor(this.state.time - (Math.floor(this.state.time / 60)) * 60)))}</Text>
                                            <ProgressBarActive
                                                seekTo={(position) => this.seekTo(position)}
                                                seeking={(flag) => this.seeking(flag)}
                                                // outerStyle={styles.seekBar} innerStyle={styles.watchedProgress}
                                                progress={this.state.timePercent} />
                                            <Text style={styles.timer}>{this.state.timePercent >= 99.98 ? '00:00' : (this.pad(Math.floor(this.state.remainingTime / 60)) + ":" + this.pad(Math.floor(this.state.remainingTime - (Math.floor(this.state.remainingTime / 60)) * 60)))}</Text>
                                        </View>
                                    </>}
                                    
                                    
                                    <View style={styles.choiceContainer}>
                                            <TouchableOpacity
                                                // onFocus={()=>this.setState({audioFocus:true})}
                                                // onBlur={()=>this.setState({audioFocus:false})}
                                                onPress={()=>this.setState({
                                                        audioFocus:true,
                                                        playListFocus:false})}>
                                                
                                                <AudioSub width={45} height={45} />
                                            </TouchableOpacity>
    
                                        
                                            <TouchableOpacity
                                                // onFocus={()=>this.setState({playListFocus:true})}
                                                // onBlur={()=>this.setState({playListFocus:false})}
                                                onPress={()=>this.setState({
                                                    playListFocus:true,
                                                    audioFocus:false})}>
                                                <PlayList width={45} height={45}/>
                                            </TouchableOpacity>
                                    </View>
                                    <View style={styles.choiceTextContainer}>
                                        {this.state.audioFocus && <Text style={styles.audioText}>Audio {'\u0026'} Subtitles</Text>}
                                        {this.state.playListFocus && <Text style={styles.playListText}>playlist</Text>}
                                    </View>
                                    

                                </Animated.View>}

                        </TouchableOpacity>

                        {!this.state.errorMsg && <View style={[styles.loadingContainer, { height: height, width: width } ]}>
                            {this.state.isLoading ?
                                <LottieView source={require('../../assets/lottie/fastloading.json')} autoPlay loop style={{ height: 100 }} />
                                : null}
                        </View>}

                        {this.props.source.poster && !this.state.errorMsg && this.state.showBanner && <View style={[styles.posterContainer, { height: height, width: width } ]}>
                            <ProgressiveImage
                                style={{ width: width, aspectRatio: 1.7, height: '100%' }}
                                thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                                source={{ uri: setImageUrl(this.props.source.poster, 400, 300, 800, 600) }}
                            />
                        </View>}

                        {this.state.errorMsg != '' && <Text style={[styles.errorText, { height: height, width: width } ]}>{this.state.errorMsg}</Text>}
                        
                        
                    </>
                } 
            </>


        );
    }
}



const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
    },
    player: {
        backgroundColor: colors.black,
    },
    uiContainer: {
        position: 'absolute',
        zIndex: 2,
    },
    loadingContainer: {
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    posterContainer: {
        position: 'absolute',
        zIndex: 1,
    },
    errorText: {
        position: 'absolute',
        top: '50%',
        zIndex: 1,
        textAlign: 'center',
        color: colors.white,
    },
    centerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    wrapper: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: '#0000004a'
    },
    bottomBar: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        bottom: 10,
        // width:800
        // marginHorizontal:20,
    },
    seekBar: {
        width: '85%',
        backgroundColor: 'rgba(255,255,255,.2)',
        marginRight: 10,
        borderRadius: 2
    },
    watchedProgress: {
        height: 3,
        borderRadius: 2,
        backgroundColor: colors.highlight
    },
    topContainer: {
        position: 'absolute',
        top: 10,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    showName: {
        marginLeft: 0,
        color: colors.white,
        fontSize: fontSize.medium
    },
    backIcon: {
        width: 60,
        padding: 10,
        alignItems: 'center',
    },
    replay: {
        color: colors.white,
        fontSize: fontSize.largest,
        height: 30
    },
    timer:{
        color: colors.white, 
        fontFamily: fontFamily.regular, 
        marginLeft: 10, 
        width: 40, 
        fontSize: fontSize.extralarge
    },
    choiceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:130,
        position:'absolute',
        top:10,
        right:20,
    },
    choiceTextContainer:{
        position:'absolute',
        top:60,
        right:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    audioText:{  
        color:colors.white,
        marginRight:50,
    },
    playListText:{
        color:colors.white,
        marginLeft:15,
    },
    ticker:{
        color:colors.white,
    }

});