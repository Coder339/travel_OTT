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
  medium: 13,
  large: 1.2,
  larger: 17,
  largest: 1.4, //titlefont is largest
  extralarge: 14,
  extralargest: 25.5,
  superlargest: 30,
};

export const colors = {
  white: '#fff',
  black: '#000',
  travelred: '#D9243D',
  lightgray: '#707070',
  transparent: 'transparent',
  backgroundColor: '#1F2227',
  orange :'#FA6F2A'
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
    // aspectRatio:250/350,
    height: 350,
    width: 250,
  },
  rectangleImage: {
    // aspectRatio: 1.667,width by height
    aspectRatio: 250 / 150,
    height: 150,
    width: 250,
  },
  heroImage: {
    aspectRatio: 0.8,
    height: 480,
  },
  rectangleImageDetail: {
    aspectRatio: 1,
    height: 350,
    width: 750,
  },
  focusBorder: {
    borderWidth: 5,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  blurBorder: {
    borderWidth: 5,
    borderColor: colors.transparent,
  },
  bannerParagraph: {
    fontSize: fontSize.extralarge,
    color: colors.white,
  },
  bannerTitle: {
    color: colors.white,
    fontSize: fontSize.extralargest,
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
  blurPlayButtonDetails:{
    // backgroundColor: colors.black,
    width: 150,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusPlayButtonDetails:{
    width: 150,
    height: 55,
    borderWidth: 2,
    borderColor: colors.white,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusBorderMinusPlusSVG:{
    borderColor:colors.white,
    borderWidth:2,
  },
  blurBorderMinusPlusSVG:{
    borderColor:colors.white,
    borderWidth:2,
  },
  focusMenuBar: {
    backgroundColor: colors.travelred,
    color: colors.white,
    overflow: 'hidden',
    // borderRadius: 55,
  },
  blurMenuBar: {
    // backgroundColor: '#1F2227',
    // color: colors.black,
  },
  cardTitle : {
    color: colors.white,
    fontFamily:fontFamily.heavy,
  },
});
