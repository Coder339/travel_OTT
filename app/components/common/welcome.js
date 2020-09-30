
import React from 'react';
import { View } from 'react-native';
import { colors } from '../../assets/globalstyleconstants';
import LogoSvgComponent from '../../assets/images/travelxplogo';

export default function Welcome() {
    return (
        <View style={{ backgroundColor: colors.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <LogoSvgComponent fill={colors.travelred} width={250} height={100} />
        </View>
    );
}