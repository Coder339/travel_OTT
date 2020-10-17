import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, fontSize, fontFamily, globalstyles, setImageUrl, } from '../../assets/globalstyleconstants';
import RectangleCarditem from './rectanglecarditem';


export default class RectangleCard extends PureComponent {
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

  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined)
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
    // alert('hello from child')
    this.scrollRef.scrollTo({
      x: 260 * (this.props.scrollToIndex),
    });
    console.log(this.props.scrollToIndex)
  };

  render() {
    const { type, item, scrollToIndex, episode, onEpisodeFocus } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {(type === 'rectangle-card' || type === 'rectangle-card-title') && (
            <Text style={styles.sectionTitle}>
              {type === 'rectangle-card' && item.section_title}
              {item.title}
            </Text>
          )}
        </View>

        <ScrollView
          style={styles.imageContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          decelerationRate={'fast'}
          snapToAlignment="start"
          ref={ref => this.scrollRef = ref}
        >
          {item.data.map((data, index) => (
            <View key={index}>
              <RectangleCarditem
                data={data}
                type={type}
                key={index}
                onPress={(nav) => this.props.onPress(nav)}
                onFocus={this.seasonChange}
                onBlur={this.seasonChange}
                episodeFocus={episode == index}
                title={item.title}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  titleContainer: {
    marginLeft: 54,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fontSize.larger,
    fontFamily: fontFamily.regular,
  },
  sectionTitleDetails: {
    color: colors.orange,
    fontSize: fontSize.superlargest,
    fontFamily: fontFamily.bold,
  },
  selected: {
    position: 'absolute',
    top: -20,
    opacity: 1,
    width: 230,
  },
  imageContainer: {
    marginLeft: 40
  },
  progressiveImageContainer: {
    position: 'relative',
    top: 10,
  },
  progressiveImageInnerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  rectangleImageDetailTitle: {
    position: 'absolute',
    top: 100,
  },
  seasonEpisodeCont: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 1,
    width: 175,
    position: 'absolute',
    top: 160,
  },
  itemCont: {
    color: colors.lightgray,
    fontSize: fontSize.medium,
  },
  descCont: {
    width: 380,
    position: 'absolute',
    top: 185
  }
  ,
  descContInner: {
    fontSize: fontSize.medium,
    color: colors.white
  },
  buttonCont: {
    flexDirection: 'row',
    width: 500,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 280,
  }
});
