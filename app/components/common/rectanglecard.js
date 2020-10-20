import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, fontSize, fontFamily, } from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';

export default class RectangleCard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      refer: null,
      season: undefined
    }
    this.seasonChange = this.seasonChange.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }

  seasonChange(currentSeason) {
    if (this.state.season != currentSeason) {
      this.setState({
        season: currentSeason
      })
      this.props.onEpisodeFocus(currentSeason)
    }
  };

  scrollHandler() {
    // alert(this.props.scrollToIndex)
    this.Ref.scrollTo({
      x: 235 * (this.props.scrollToIndex),
      animated: true,
    });
  };

  render() {
    const { type, item, episode, rectangleContainer, sectionTitle } = this.props;
    console.log('item', item)
    return (
      <View style={styles.container}>
        {(type === 'rectangle-card' || type === 'rectangle-card-title') && (
          <Text style={[styles.sectionTitle, sectionTitle]}>
            {type === 'rectangle-card' && item.section_title}
            {item.title}
          </Text>
        )}
        <ScrollView
          style={[styles.rectangleContainer, rectangleContainer]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          decelerationRate={"fast"}
          snapToInterval={234}
          snapToAlignment="start"
          ref={ref => this.Ref = ref}
        >
          {item.data.map((data, index) =>
            <RectangleCarditem
              data={data}
              type={type}
              key={index}
              onPress={this.props.onPress}
              onFocus={this.seasonChange}
              onBlur={this.seasonChange}
              episodeFocus={episode == index}
              title={item.title}
            />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
    marginLeft: 54
  },

  rectangleContainer: {
    marginLeft: 40,
    marginRight: 5
  },

});
