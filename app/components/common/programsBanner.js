import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text,TouchableOpacity } from 'react-native';
import { colors, fontFamily, fontSize, globalstyles, setImageUrl } from '../../assets/globalstyleconstants';
import PlayWatchButton from '../common/playwatchbutton';
import CustomButtons from './custombutton';
import ProgressiveImage from '../common/progressiveimage';
import RectangleCard from './rectanglecard';
import GoBack from '../../assets/images/goback';

export default class ProgramsBanner extends React.PureComponent {

  constructor(props) {
    super(props);
    const seasons = Array(this.props.data.seasons).fill('');
    const seasonNo = this.props.data.data.map((item) => item.season);
    this.state = {
      scrollToIndex: 0,
      seasonNo: seasonNo,
      season:undefined,
      seasons: seasons,
      episodeFocus: 0,
      seasonFocus: undefined,
      eIndex:0,
      flag:undefined,

    };
    // this.setSeasonFocus = this.setSeasonFocus.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this);
    this.seasonOnFocus = this.seasonOnFocus.bind(this);
    // this.seasonChange = this.seasonChange.bind(this)
    // this.onFocusBooleanFlag = this.onFocusBooleanFlag.bind(this)
    // this.onBlurBooleanFlag = this.onBlurBooleanFlag.bind(this)
    this.itemFlag = this.itemFlag.bind(this);
  }


  seasonOnFocus(scrollToIndex) {
    let episodeIndex = this.state.seasonNo.findIndex((item) => item === scrollToIndex);
    this.setState({ scrollToIndex: episodeIndex,eIndex:episodeIndex }, () => this.scrollHandler())
  }

  itemFlag(){
    this.setState({flag:true})
    console.log('playflag',this.state.flag)

  }

  // setSeasonFocus(currentSeason) {
  //   if (this.state.seasonFocus != currentSeason) {
  //     this.setState({
  //       seasonFocus: currentSeason
  //     })
  //   }
  // }

  // seasonChange(currentSeason) {
  //   if (this.state.season != currentSeason) {
  //     this.setState({
  //       season: currentSeason
  //     })
  //     this.setSeasonFocus(currentSeason)
  //   }
  // };

  scrollHandler() {
    this.child.scrollHandler()
  };


  
  render() {
    const { data } = this.props;
    console.log('programdata', data)
    console.log('programFlg', this.props.program)
    console.log('ses',this.state.seasonNo)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageStyle}>
          <ProgressiveImage
            style={globalstyles.rectangleImageDetail}
            overlay={false}
            thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
            source={{ uri: setImageUrl(data.image, 1280, 720) }}
            isLinearGradient={true}
            type="details"
          />
        </View>
        <TouchableOpacity 
            style={styles.goback} 
            onPress={()=>this.props.navigation.navigate('home')}>
            <GoBack 
                width={25} 
                height={25}
            />
        </TouchableOpacity>
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerTitle}>{data.title}</Text>
          <View style={styles.seasonEpisodeCont}>
            <Text style={styles.itemCont}>{data.seasons} seasons</Text>
            <Text style={{ color: colors.lightgray }}>|</Text>
            <Text style={styles.itemCont}>{data.episodes} Episodes</Text>
          </View>
          <Text numberOfLines={3} style={styles.bannerParagraph}>{data.description}</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.buttonCont}
            showsHorizontalScrollIndicator={false}
          >
            <PlayWatchButton 
               name="Trailer" 
               propStyle={{ marginRight: 20 }} 
               focus={true} 
               program={this.props.program}
              //  onBlur={this.seasonChange}
              itemFlag={this.itemFlag}
               onBlur={this.props.onBlur}
            />
            {this.state.seasons.map((item, index) => (
              <CustomButtons
                key={index}
                name="SEASON"
                item={item}
                value={index}
                onBlur={this.props.onBlur}
                // onBlur={this.seasonChange}
                // ValueEIndex={this.state.seasonNo[this.state.eIndex]}
                season={this.props.seasonFocus}
                // season={this.state.seasonFocus}
                seasonOnFocus={this.seasonOnFocus}
                scrollHandler={this.scrollHandler}
              />
            ))}
          </ScrollView>
        </View>
        {(data.type.includes('rectangle-card-details') || data.type === 'rectangle-card') && (
          <RectangleCard
            item={data}
            type={data.type}
            rectangleContainer={{ marginLeft: 0 }}
            scrollToIndex={this.state.scrollToIndex}
            episode={this.state.episode}
            onRef={ref => (this.child = ref)}
            flag={this.state.flag}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            // onFocus={this.seasonChange}
            // onBlur={this.seasonChange}
            // onEpisodeFocus={this.setSeasonFocus}
          />
        )}
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    position: 'relative',
  },
  bannerContainer: {
    // backgroundColor: colors.backgroundColor,
    position: 'absolute',
    top: 40,
    left: 32
  },
  bannerTitle: {
    color: colors.orange,
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
  },
  seasonEpisodeCont: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 125,
    alignItems: 'center'
  },
  itemCont: {
    color: colors.lightgray,
    fontSize: 10,
  },
  bannerParagraph: {
    width: 380,
    marginTop: 10,
    fontSize: 10,
    color: colors.white,
  },
  buttonCont: {
    flexDirection: 'row',
    // width: 500,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  imageStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  goback:{
    position:'absolute',
    top:10,
    left:32
  }
});
