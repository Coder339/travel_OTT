import React, {PureComponent} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors,} from '../assets/globalstyleconstants';
import movieOTTData from '../config/OTTProgramDetails.json';
import RectangleCard from '../components/common/rectanglecard';
import ProgramsBanner  from "../components/common/programsBanner";

export class Programs extends PureComponent {
  constructor(props) {
    super(props);

    const seasons = Array(movieOTTData[0].seasons).fill('');
    let seasonNo = movieOTTData[0].data.map((item) => item.season);
    this.state = {
      movieOTTData: movieOTTData[0],
      ref: null,
      scrollToIndex: 0,
      seasonNo: seasonNo,
      seasons: seasons,
      episodeFocus:0,
    };
    // this.scrollHandler = this.scrollHandler.bind(this);
    this.seasonOnFocus = this.seasonOnFocus.bind(this);
    this.episodeChange = this.episodeChange.bind(this);
  }

  scrollHandler(){
    this.state.ref.scrollTo({
      x: 260 * this.state.scrollToIndex,
    });
   };

  seasonOnFocus(scrollToIndex){
    let episodeIndex = this.state.seasonNo.findIndex((item) => item == scrollToIndex);
    this.setState({scrollToIndex:episodeIndex})
  }
  
  episodeChange(currentSeason){
    let episode = this.state.seasonNo.findIndex((item) => item == currentSeason);
    this.setState({episodeFocus:episode})
  };

  render() {
    console.log(movieOTTData.seasons)
    return (
      <ScrollView style={styles.container}>
        <ProgramsBanner 
           movieOTTData={this.state.movieOTTData}
           seasonOnFocus={(seasonIndex)=>this.seasonOnFocus(seasonIndex)}
          //  scrollHandler={this.scrollHandler()}
           episodeChange={this.episodeChange}
           seasons={this.state.seasons}
        />
        {movieOTTData.map((item, index) => (
          <View key={index}>
            {(item.type.includes('rectangle-card-details') ||item.type === 'rectangle-card') && (
              <RectangleCard 
                type={item.type} 
                item={item} 
                scrollToIndex={this.state.scrollToIndex}
                episode={this.state.episode}
                ref={this.state.ref}
              />
            )}
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
