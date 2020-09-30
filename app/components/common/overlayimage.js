import React from 'react'
import { View, Text } from 'react-native'

export default function OverlayImage(props) {
    return (
        <View style={[{
            position: 'absolute',
            bottom: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#0000004a',
        }, props.style]} />
    )
}
