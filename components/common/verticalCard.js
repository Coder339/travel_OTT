import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default React.memo(function VerticalCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA', item);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.textWhiteColor}>{item.title}</Text>
      </View>
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          {item.data.map((data, index) => (
            <View style={styles.container}>
              <Image
                source={{uri: data.image}}
                style={{width: 250, height: 290}}
              />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
  },
  titleContainer: {
    paddingLeft: 20,
  },
  textWhiteColor: {
    color: 'white',
  }
});
