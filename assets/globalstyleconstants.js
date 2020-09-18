import {StyleSheet, Dimensions} from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const ratioX = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;
const ratioY = Height < 568 ? (Height < 480 ? 0.75 : 0.875) : 1;
const base_unit = 14;
const unit = base_unit * ratioX;

export function em(value) {
    return unit * value;
}

export function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 15
    };
}

export const fontSize = {
    extrasmallest: em(0.55),
    smallest: em(0.7),
    smaller: em(0.8),
    small: em(0.9),
    normal: em(1),
    medium: em(1.1),
    large: em(1.2),
    larger: em(1.3),
    largest: em(1.4), //titlefont is largest
    extralarge: em(1.6),
    extralargest: em(2),
    superlargest: em(2.5)
}

export const colors = {
    white: '#fff',
    black: '#000',
    travelred:'#D9243D',
    lightgray:'#707070',
    
}


export const font = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
    heavy: 'Inter-ExtraBold',
}

export const globalstyles = StyleSheet.create({
    hspace:{
        marginHorizontal:60
    }
})

