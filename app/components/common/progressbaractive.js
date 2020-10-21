import React from 'react'
import { StyleSheet, View, Animated, Dimensions } from 'react-native'
import { colors } from '../../assets/globalstyleconstants'
import { PanGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler'
import THEOeventEmitter from '../common/TheoEventEmitter'

const theoEventEmitter = new THEOeventEmitter();

let width = 1;
let sliderWidth = width

export default class ProgressBarActive extends React.PureComponent {

    translateX = new Animated.Value(0)
    _lastOffset = { x: 0 };

    handleGesture = Animated.event([{
        nativeEvent: {
            translationX: this.translateX
        }
    }], {
        useNativeDriver: true,
        listener: () => {
            this.props.seeking(true)
            if (!this.state.seeking) {
                this.setState({
                    seeking: true
                })
            }
        }
    });


    constructor(props) {
        super(props)

        this.listeners = {};

        this.state = {
            useProgress: true,
            progress: 0,
            landscape: true,
            seeking: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.progress != 0 && (props.progress !== state.progress)) {
            return {
                progress: props.progress,
            };
        }

        return null;
    }


    handleStateChange = (e) => {
        if (e.nativeEvent.state === State.END) {
            this.props.seekTo((e.nativeEvent.absoluteX - 16) / sliderWidth);
            if (this.state.seeking) {
                this.setState({
                    seeking: false
                })
                this.props.seeking(false)
            }
        }
        if (e.nativeEvent.oldState === State.ACTIVE) {
            this._lastOffset.x += e.nativeEvent.translationX;
            this.translateX.setOffset(this._lastOffset.x);
            this.translateX.setValue(0);
        }
        if (e.nativeEvent.state === State.BEGAN) {
            this.setState({
                useProgress: false
            })
        }
    }

    handleTap = (e) => {
        this.props.seekTo((e.nativeEvent.absoluteX - 16) / sliderWidth);
    }

    useProgress = () => {
        if (!this.state.useProgress) {
            this.setState({
                useProgress: true
            })
        }
    }

    render() {
        width = Dimensions.get("window").width;
        sliderWidth = width - (this.state.landscape ? 90 : 70);
        const { outerStyle, innerStyle } = this.props;
        const { progress } = this.state

        let barHeader = (((progress * sliderWidth) / 100) - 22) / sliderWidth * 100

        if (this.state.useProgress) {
            this._lastOffset.x = ((sliderWidth * progress) / 100);
            this.translateX.setOffset(this._lastOffset.x);
            this.translateX.setValue(0);
        }


        if (!this.listeners['playing']) {
            this.listeners['playing'] = theoEventEmitter.addListener(
                'playing',
                (event) => this.useProgress()
            );
        }

        let circleTransformStyle = {
            transform: [
                {
                    translateX: this.translateX.interpolate({
                        inputRange: [-20, sliderWidth - 20],
                        outputRange: [-20, sliderWidth - 20],
                        extrapolate: 'clamp'
                    })
                }
            ]
        }

        return (
            <View style={styles.container}>
                <TapGestureHandler onHandlerStateChange={this.handleTap}>
                    <View style={outerStyle ? outerStyle : styles.seekbarContainer, { width: sliderWidth-100, height: 40, justifyContent: 'center' }}>
                        <View style={styles.seekbar} />
                        <View style={[innerStyle ? innerStyle : styles.innerClass, { width: `${progress}%` }]} />
                    </View>
                </TapGestureHandler>
                <>
                    <PanGestureHandler onGestureEvent={this.handleGesture}
                        onHandlerStateChange={this.handleStateChange}>
                        <Animated.View
                            style={[styles.round,
                            this.state.useProgress ? { left: `${barHeader}%` }
                                :
                                circleTransformStyle

                            ]}
                        ><View style={[styles.circle, this.state.seeking ? styles.bigCircle : styles.regularCircle]} />
                        </Animated.View>
                    </PanGestureHandler>
                </>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal:5
        // borderWidth: 1,
        // borderColor: colors.orange
    },
    seekbarContainer: {
        height: 3 ,
        borderRadius:  12 ,
        backgroundColor: colors.transparent,
        justifyContent: 'center',
        // width:800,
    },
    innerClass: {
        height:  3 ,
        borderRadius: 1 ,
        backgroundColor: colors.white
    },
    seekbar: {
        position: 'absolute',
        height: 4,
        width: '100%',
        // width:800,
        backgroundColor: 'rgba(255,255,255,.2)',
        borderRadius: 2
    },
    round: {
        position: 'absolute',
        backgroundColor: colors.transparent,
        zIndex: 4,
        padding: 10
    },
    circle: {
        borderWidth: 1,
        borderColor: colors.lightblack,
        backgroundColor: colors.white,
    },
    bigCircle: {
        height: 18,
        width: 18,
        borderRadius: 10,
    },
    regularCircle: {
        height: 13,
        width: 13,
        borderRadius: 10,
    },
})
