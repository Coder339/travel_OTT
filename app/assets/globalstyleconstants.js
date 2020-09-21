import { StyleSheet } from "react-native";


export function setImageUrl(imgUrl, tvwidth, tvheight) {

    const width = tvwidth;
    const height = tvheight;

    if (imgUrl === "" || imgUrl === undefined || imgUrl === null) {
        return "../../assets/images/noimagefound.png"
    }
    else if (imgUrl.includes("images.travelxp.com")) {
        return imgUrl + "?tr=w-" + width + ",h-" + height
    }
    else {
        return imgUrl
    }
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
    extrasmallest: 0.55,
    smallest: 0.7,
    smaller: 0.8,
    small: 0.9,
    normal: 1,
    medium: 1.1,
    large: 1.2,
    larger: 1.3,
    largest: 1.4, //titlefont is largest
    extralarge: 1.6,
    extralargest: 2,
    superlargest: 2.5
}

export const colors = {
    white: '#fff',
    black: '#000',
    travelred: '#D9243D',
    lightgray: '#707070',
    transparent: 'transparent'
}

export const fontFamily = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
    heavy: 'Inter-ExtraBold',
}

export const globalstyles = StyleSheet.create({
    hspace: {
        marginHorizontal: 60
    },
    keypadding: {
        paddingRight: 10,
        paddingVertical: 7
    },
    verticalImage: {
        aspectRatio: 0.8,
        height: 200
    },
    focusBorder: {
        borderWidth: 5,
        borderColor: colors.white,
        backgroundColor: colors.transparent,
        opacity: 1
    },
    blurBorder: {
        borderWidth: 5,
        borderColor: colors.transparent
    },
    keypadding:{
        paddingRight:16,
        paddingVertical:7}
})

