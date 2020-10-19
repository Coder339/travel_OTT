import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors, fontFamily, fontSize, globalstyles, setImageUrl} from '../../assets/globalstyleconstants';
import PlayWatchButton from '../common/playwatchbutton';
import CustomButtons from './custombutton';
import ProgressiveImage from '../common/progressiveimage';
import RectangleCard from './rectanglecard';

export default class ProgramsBanner extends React.PureComponent {

  constructor(props) {
    super(props);
    const seasons = Array(this.props.data.seasons).fill('');
    const seasonNo = this.props.data.data.map((item) => item.season);
    this.state = {
      scrollToIndex: 0,
      seasonNo: seasonNo,
      seasons: seasons,
      episodeFocus:0,
      seasonFocus: undefined
    };
    this.setSeasonFocus = this.setSeasonFocus.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this);
    this.seasonOnFocus = this.seasonOnFocus.bind(this);
  }


  seasonOnFocus(scrollToIndex){
    let episodeIndex = this.state.seasonNo.findIndex((item) => item === scrollToIndex);
    this.setState({scrollToIndex:episodeIndex},()=>this.scrollHandler())
  }

  setSeasonFocus(currentSeason){
    if(this.state.seasonFocus != currentSeason){
      this.setState({
        seasonFocus: currentSeason
      })
    }
  }

  scrollHandler(){
    this.child.scrollHandler() 
   };

  render() {
    const {data,} = this.props;
    console.log('programdata',data)
    return (
      <ScrollView style={styles.container}>
          <View style={styles.imageStyle}>
            <ProgressiveImage
              style={globalstyles.rectangleImageDetail}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(data.image, 900, 900)}}
              isLinearGradient={true}
              type="details"
            />
          </View>
          <View style={styles.bannerContainer}>
            <Text style={styles.bannerTitle}>{data.title}</Text>
            <View style={styles.seasonEpisodeCont}>
              <Text style={styles.itemCont}>{data.seasons} seasons</Text>
              <Text style={{color: colors.lightgray}}>|</Text>
              <Text style={styles.itemCont}>{data.episodes} Episodes</Text>
            </View>
            <Text numberOfLines={3} style={styles.bannerParagraph}>{data.description}</Text>
            <View style={styles.buttonCont}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <PlayWatchButton name="Trailer" />
                {this.state.seasons.map((item, index) => (
                  <CustomButtons
                    key={index}
                    name="SEASON"
                    item={item}
                    value={index}
                    season={this.setSeasonFocus}
                    seasonOnFocus={this.seasonOnFocus}
                    scrollHandler={this.scrollHandler}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
          {(data.type.includes('rectangle-card-details') || data.type === 'rectangle-card') && (
            <RectangleCard 
              item={data}
              type={data.type} 
              scrollToIndex={this.state.scrollToIndex}
              episode={this.state.episode}
              onRef={ref => (this.child = ref)}
              onEpisodeFocus={this.setSeasonFocus}
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
  bannerContainer:{
    backgroundColor: colors.backgroundColor,
    position:'absolute',
    top:60,
    left:74
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
    width: 175,
  },
  itemCont: {
    color: colors.lightgray,
    fontSize: fontSize.medium,
  },
  bannerParagraph: {
    width: 380,
    marginTop: 10,
    fontSize: fontSize.medium,
    color: colors.white,
  },
  buttonCont: {
    flexDirection: 'row',
    width: 500,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  imageStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
