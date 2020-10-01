import React, {PureComponent} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import movieOTTData from '../config/OTTdata.json';
import RectangleCard from '../components/common/rectanglecard';
import VerticalCard from '../components/common/verticalcard';
import HeroCard from '../components/common/herocard';
import StartMenuBar from '../components/common/startmenubar';
import {colors} from '../assets/globalstyleconstants';
import Player from './player';

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('home');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <Player />
          {movieOTTData.map((item, index) => (
            <View key={index}>
              {item.type.includes('rectangle-card') ? (
                <RectangleCard type={item.type} item={item} />
              ) : null}
              {item.type.includes('vertical-card') ? (
                <VerticalCard type={item.type} item={item} />
              ) : null}
              {item.type.includes('hero') ? (
                <HeroCard type={item.type} item={item} />
              ) : null}
            </View>
          ))}
        </ScrollView>
        <View style={styles.sideBarContainer}>
          <StartMenuBar />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.backgroundColor,
  },
  sideBarContainer: {
    position: 'absolute',
    left: 0,
  },
});
