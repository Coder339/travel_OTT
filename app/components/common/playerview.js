import React from 'react';
import { Dimensions, NativeModules, StyleSheet, View, Platform, ScrollView, Text, Animated } from 'react-native';
import { colors, font, fontSize, setImageUrl, fontFamily } from '../../assets/globalstyleconstants';
import THEOplayerView from './theoplayerview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressBarActive from '../common/progressbaractive'
import LongPlay from '../../assets/images/longplay';
import PauseBold from '../../assets/images/pausebold';
import PlayBold from '../../assets/images/playbold';
import GoBack from '../../assets/images/goback';
import AudioSub from '../../assets/images/audiosub';
import PlayList from '../../assets/images/playlist';
import Forward30 from '../../assets/images/forward30';
import Rewind30 from '../../assets/images/rewind30';
import THEOeventEmitter from './TheoEventEmitter';
import ProgressiveImage from './progressiveimage';
import LottieView from 'lottie-react-native';
import Refresh from '../../assets/images/refresh';

const theoEventEmitter = new THEOeventEmitter();

let width = 500;
let height = 300;
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

    goBack = () => {
        this.props.onBack()
    }

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
                        // style={[playerStyle, customPlayerstyle, this.state.landscape ? { width: width, height: height } : { aspectRatio: 1.7 }]}
                        style={[playerStyle, customPlayerstyle, /*this.state.landscape ?*/ { width: width, height: height } /*: { aspectRatio: 1.7 }*/]}
                        fullscreenOrientationCoupling={false}
                        autoplay={true}
                        source={this.props.source}
                    />
                </BaseComponent>
                {this.props.showUI &&
                    <>
                        <TouchableOpacity
                            // onTouchStart={this.showUI}
                            onPress={this.showUI}
                            // containerStyle={[styles.uiContainer, this.state.landscape ? { height: height, width: width } : { width: width, aspectRatio: 1.7 }]}
                            containerStyle={[styles.uiContainer,/*this.state.landscape ?*/ { width: width, height: height } /*: { aspectRatio: 1.7 }*/]}
                        >
                            {(this.state.seeking || this.state.showUI) &&
                                <Animated.View style={styles.wrapper}>
                                    <View style={styles.topContainer}>

                                        <View style={styles.topLeftContainer}>

                                            <TouchableOpacity containerStyle={styles.backIcon} onPress={this.goBack}>
                                                <LongPlay />
                                            </TouchableOpacity>
                                            <Text style={styles.showName}>Backpack S1 | E2</Text>

                                        </View>
                                        <View>
                                            <View style={styles.choiceContainer}>
                                                <TouchableOpacity
                                                    onPress={() => this.setState({
                                                        audioFocus: true,
                                                        playListFocus: false
                                                    })}
                                                >

                                                    <AudioSub width={22} height={22} />
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    onPress={() => this.setState({
                                                        playListFocus: true,
                                                        audioFocus: false
                                                    })}>
                                                    <PlayList width={22} height={22} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.choiceTextContainer}>
                                                {this.state.audioFocus && <Text style={styles.audioText}>Audio {'\u0026'} Subtitles</Text>}
                                                {this.state.playListFocus && <Text style={styles.playListText}>playlist</Text>}
                                            </View>
                                        </View>

                                    </View>

                                    {!this.state.errorMsg && !this.state.showBanner &&
                                        <>
                                            <View style={styles.centerContainer}>
                                                {/* <TouchableOpacity
                                                    onPress={() => this.seek('minus')}
                                                >
                                                    <Rewind30 />
                                                </TouchableOpacity> */}
                                                <TouchableOpacity
                                                    onPress={this.togglePlayPause}
                                                    style={{ width: 40 }}
                                                >
                                                    {(this.state.timePercent < 99.98 && !this.state.isLoading && this.state.paused) &&
                                                        <PlayBold />
                                                    }
                                                    {(this.state.timePercent < 99.98 && !this.state.isLoading && !this.state.paused) &&
                                                        <PauseBold />
                                                    }

                                                    {this.state.timePercent > 99.98 && <Refresh />}

                                                </TouchableOpacity>
                                                {/* <TouchableOpacity
                                                    onPress={() => this.seek('add')}
                                                >
                                                    <Forward30 />
                                                </TouchableOpacity> */}
                                            </View>

                                            <View style={[styles.bottomBar, {
                                                marginLeft: this.state.landscape ? 20 : 10,
                                                marginRight: this.state.landscape ? 20 : 10
                                            }]}>
                                                <Text
                                                    style={styles.timer}>{(this.pad(Math.floor(this.state.time / 60)) + ":" + this.pad(Math.floor(this.state.time - (Math.floor(this.state.time / 60)) * 60)))}</Text>
                                                <ProgressBarActive
                                                    seekTo={(position) => this.seekTo(position)}
                                                    seeking={(flag) => this.seeking(flag)}
                                                    // outerStyle={styles.seekBar} innerStyle={styles.watchedProgress}
                                                    progress={this.state.timePercent} />
                                                <Text style={styles.timer}>{this.state.timePercent >= 99.98 ? '00:00' : (this.pad(Math.floor(this.state.remainingTime / 60)) + ":" + this.pad(Math.floor(this.state.remainingTime - (Math.floor(this.state.remainingTime / 60)) * 60)))}</Text>

                                            </View>
                                        </>
                                    }


                                </Animated.View>
                            }


                        </TouchableOpacity>

                        {!this.state.errorMsg && <View style={[styles.loadingContainer, this.state.landscape ? { height: height, width: width } : { width: width, aspectRatio: 1.7 }]}>
                            {this.state.isLoading &&
                                <LottieView source={require('../../assets/lottie/fastloading.json')} autoPlay loop style={{ height: 100 }} />
                                }
                        </View>}

                        {this.props.source.poster && !this.state.errorMsg && this.state.showBanner && <View style={[styles.posterContainer, this.state.landscape ? { height: height, width: width } : { width: width, aspectRatio: 1.7 }]}>
                            <ProgressiveImage
                                style={{ width: width, aspectRatio: 1.7, height: '100%' }}
                                thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
                                source={{ uri: setImageUrl(this.props.source.poster, 400, 300, 800, 600) }}
                            />
                        </View>}

                        {this.state.errorMsg != '' && <Text style={[styles.errorText, this.state.landscape ? { height: height, width: width } : { width: width, aspectRatio: 1.7 }]}>{this.state.errorMsg}</Text>}

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
        // position: 'absolute',
        // zIndex: 2,

    },
    loadingContainer: {
        position: 'absolute',
        // zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    posterContainer: {
        // position: 'absolute',
        // zIndex: 1,
    },
    errorText: {
        // position: 'absolute',
        top: '50%',
        // zIndex: 1,
        textAlign: 'center',
        color: colors.white,
    },
    centerContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    wrapper: {
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        // zIndex: 1,
        backgroundColor: '#0000004a'
    },
    bottomBar: {
        // position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        bottom: 10
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        // position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        width: '100%'
    },
    showName: {
        marginLeft: 12,
        color: colors.white,
        fontSize: fontSize.medium
    },
    backIcon: {
        width: 60,
        // padding: 10,
        marginLeft: 12,
        alignItems: 'center',
    },
    replay: {
        color: colors.white,
        fontSize: fontSize.largest,
        height: 30
    },
    timer: {
        color: colors.white,
        fontFamily: fontFamily.regular,
        marginHorizontal: 10,
        width: 50,
        fontSize: fontSize.extralarge
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        position: 'absolute',
        top: 10,
        right: 20,
    },
    choiceTextContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    audioText: {
        color: colors.white,
        marginRight: 20,
    },
    playListText: {
        color: colors.white,
        // marginLeft:40,
    },
});