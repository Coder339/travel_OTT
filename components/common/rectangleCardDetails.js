import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ProgressBarAndroid,
} from 'react-native';
import WatchlistMinusSvg from '../../app/images/watchlistminussvg';
import FourkSvg from '../../app/images/fourksvg';
import HDSvg from '../../app/images/hdsvg';
import WatchlistPlusSvg from '../../app/images/watchlistplussvg';

export default React.memo(function RectangleCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA', item);
  return (
    <View>
      <View style={styles.titleContainer}>
        {type === 'rectangle-card' ? (
          <Text style={styles.textWhiteColor}>{item.section_title}</Text>
        ) : (
          <Text style={styles.textWhiteColor}>{item.title}</Text>
        )}
      </View>
      
        <ScrollView horizontal={true}>
          {item.data.map((data, index) => (
            <View style={styles.container} key={index}>
              <Image
                source={{uri: data.image}}
                style={{width: 250, height: 130}}
              />

              {type === 'rectangle-card-title' ||
              type === 'rectangle-card-details' ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 10,
                  }}>
                  <View style={{width: 180, paddingBottom: 15}}>
                    <Text numberOfLines={2} style={styles.textWhiteColor}>
                      {data.title}
                    </Text>
                  </View>
                  {type === 'rectangle-card-title' ? (
                    <View style={styles.selected}>
                      <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={data.progress / 100}
                        color="white"
                      />
                    </View>
                  ) : null}

                  {data.watchlist === true ? (
                    <WatchlistMinusSvg width="20" height="20" />
                  ) : (
                    <WatchlistPlusSvg width="20" height="20" />
                  )}
                </View>
              ) : null}
              {type === 'rectangle-card-details' ? (
                <View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{color:'grey'}}>Episode {data.episode}</Text>
                    <Text style={{color:'grey'}}> | </Text>
                    <Text style={{color:'grey'}}>{data.dur} min</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly',paddingLeft:20}}>
                      <FourkSvg width="20" height="20" />
                      <HDSvg width="20" height="20" />
                    </View>
                  </View>
                  <View style={{width: 200, paddingBottom: 15, paddingTop:10}}>
                    <Text numberOfLines={3}  style={{color:'grey'}}>
                      {data.description}
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
          ))}
        </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 12,
    // marginHorizontal: 12,
    // paddingHorizontal: 14,
    // paddingVertical: 15,
    // backgroundColor:'#1F2227'
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    position: 'relative',

    // lineargradient(rgba(0,0,0,0.1), black);
  },
  titleContainer: {
    paddingLeft: 20,
  },
  textWhiteColor: {
    color: 'white',
  },
  selected: {
    position: 'absolute',
    top: -20,
    left: 10,
    opacity: 1,
    width: 230,
  },
});
