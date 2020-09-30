import {StyleSheet} from 'react-native';

export function setImageUrl(imgUrl, tvwidth, tvheight) {
  const width = tvwidth;
  const height = tvheight;

  if (imgUrl === '' || imgUrl === undefined || imgUrl === null) {
    return '../../assets/images/noimagefound.png';
  } else if (imgUrl.includes('images.travelxp.com')) {
    return imgUrl + '?tr=w-' + width + ',h-' + height;
  } else {
    return imgUrl;
  }
}

export function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.15,
    shadowRadius: 15,
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
  extralargest: 15.5,
  superlargest: 25.5,
};

export const colors = {
  white: '#fff',
  black: '#000',
  travelred: '#D9243D',
  lightgray: '#707070',
  transparent: 'transparent',
  backgroundColor: '#1F2227',
};

export const fontFamily = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
  heavy: 'Inter-ExtraBold',
};

export const globalstyles = StyleSheet.create({
  hspace: {
    marginHorizontal: 60,
  },
  keypadding: {
    paddingRight: 10,
    paddingVertical: 7,
  },
  verticalImage: {
    aspectRatio: 0.71,
    height: 350,
    width: 250,
  },
  rectangleImage: {
    aspectRatio: 1.65,
    height: 150,
    width: 250,
  },
  heroImage: {
    aspectRatio: 0.8,
    height: 480,
  },
  focusBorder: {
    borderWidth: 5,
    borderColor: colors.white,
    // opacity: 1,
    // overlayColor: colors.transparent,
    // shadowColor: colors.transparent,
    // tintColor: colors.transparent,
    // shadowOpacity: 1,
    overflow: 'hidden',
  },
  blurBorder: {
    borderWidth: 5,
    borderColor: colors.transparent,
  },
  bannerParagraph: {
    fontSize: fontSize.extralargest,
    color: colors.white,
  },
  bannerTitle: {
    color: colors.white,
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
  },
  focusPlayButton: {
    backgroundColor: colors.travelred,
    width: 150,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    
  },
  blurPlayButton: {
    backgroundColor: colors.white,
    width: 150,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  focusMenuBar: {
    backgroundColor: colors.travelred,
    color: colors.white,
    overflow: 'hidden',
    borderRadius:55,
  },
  blurMenuBar: {
    // backgroundColor: '#1F2227',
    // color: colors.black,
  },
});
