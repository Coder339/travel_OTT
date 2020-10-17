import React, {PureComponent, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {colors,} from '../assets/globalstyleconstants';
import movieOTTData from '../config/OTTProgramDetails.json';
import RectangleCard from '../components/common/rectanglecard';
import ProgramsBanner  from "../components/common/programsBanner";
// const childRef = useRef();
export class Programs extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    const seasons = Array(movieOTTData[0].seasons).fill('');
    let seasonNo = movieOTTData[0].data.map((item) => item.season);
    this.state = {
      movieOTTData: movieOTTData[0],
      scrollToIndex: 0,
      seasonNo: seasonNo,
      seasons: seasons,
      episodeFocus:0,
      seasonFocus: undefined
    };
    this.scrollHandler = this.scrollHandler.bind(this);
    this.seasonOnFocus = this.seasonOnFocus.bind(this);
    this.episodeChange = this.episodeChange.bind(this);
    this.setSeasonFocus = this.setSeasonFocus.bind(this);
  }

  scrollHandler(){
    // this.state.ref.scrollTo({
    //   x: 260 * this.state.scrollToIndex,
    // });
    this.child.scrollHandler()
   };

  seasonOnFocus(scrollToIndex){
    let episodeIndex = this.state.seasonNo.findIndex((item) => item == scrollToIndex);
    this.setState({scrollToIndex:episodeIndex})
  }
  
  episodeChange(currentSeason){
    let episode = this.state.seasonNo.findIndex((item) => item == currentSeason);
    this.setState({episodeFocus:episode})
  };

  setSeasonFocus(currentSeason){
    if(this.state.seasonFocus != currentSeason){
      this.setState({
        seasonFocus: currentSeason
      })
    }
  }

  render() {
    console.log(movieOTTData.seasons)
    return (
      <ScrollView style={styles.container}>
        <ProgramsBanner 
           movieOTTData={this.state.movieOTTData}
           scrollHandler={this.scrollHandler}
           episodeChange={this.episodeChange}
           seasons={this.state.seasons}
           setSeasonFocus={this.state.seasonFocus}
           seasonOnFocus={this.seasonOnFocus}
        />
        {movieOTTData.map((item, index) => (
          <View key={index}>
            {(item.type.includes('rectangle-card-details') ||item.type === 'rectangle-card') && (
              <RectangleCard 
                type={item.type} 
                item={item} 
                scrollToIndex={this.state.scrollToIndex}
                episode={this.state.episode}
                onRef={ref => (this.child = ref)}
                onEpisodeFocus={this.setSeasonFocus}
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
