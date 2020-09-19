import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

export default React.memo(function VerticalCard(props) {
  const {type, item} = props;
  console.log('TYPE', type);
  console.log('DATA', item);
  const [backgroundColor, setbackgroundColor] = useState('black');

  const onFocus = () => {
    setbackgroundColor(backgroundColor = 'white');
  };

  const onBlur = () => {
    setbackgroundColor(backgroundColor = 'black');
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.textWhiteColor}>{item.title}</Text>
      </View>
      <ScrollView horizontal={true}>
        {item.data.map((data, index) => (
          <TouchableWithoutFeedback style={styles.container} key={index} onFocus={onFocus} onBlur={onBlur} >
            <Image
              source={{uri: data.image}}
              style={{
                width: 250,
                height: 290,
                borderColor: backgroundColor,
                borderWidth: 10,
              }}
            />
          </TouchableWithoutFeedback>
        ))}
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
  },
});
