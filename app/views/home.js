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
    this.Cardpress = this.Cardpress.bind(this);
  }

  Cardpress(nav){
    // console.log(nav+"     nav")
    this.props.navigation.navigate(nav);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={{position: 'relative'}}>
            {movieOTTData.map(
              (item, index) =>
                index < 2 && (
                  <View
                    key={index}
                    style={index === 1 ? styles.positionBlock : {}}>
                    {item.type.includes('rectangle-card') ? (
                      <RectangleCard type={item.type} item={item} onPress={this.Cardpress} navigation={this.props.navigation}/>
                    ) : null}
                    {item.type.includes('vertical-card') ? (
                      <VerticalCard type={item.type} item={item} onPress={this.Cardpress} />
                    ) : null}
                    {item.type.includes('hero') ? (
                      <HeroCard type={item.type} item={item} onPress={this.Cardpress} />
                    ) : null}
                  </View>
                ),
            )}
          </View>
          <View style={{marginTop: 160}}>
            {movieOTTData.map(
              (item, index) =>
                index > 1 && (
                  <View key={index}>
                    {item.type.includes('rectangle-card') && (
                      <RectangleCard type={item.type} item={item} onPress={this.rectangleCardpress} navigation={this.props.navigation}/>
                    )}
                    {item.type.includes('vertical-card') && (
                      <VerticalCard type={item.type} item={item} />
                    )}
                    {item.type.includes('hero') && (
                      <HeroCard type={item.type} item={item} />
                    )}
                  </View>
                ),
            )}
          </View>
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
  positionBlock: {
    position: 'absolute',
    bottom: -160,
  },
});
