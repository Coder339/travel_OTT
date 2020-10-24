import React, {PureComponent} from 'react';
import { StyleSheet,TouchableHighlight } from 'react-native';
import { colors,setImageUrl,globalstyles,} from '../../assets/globalstyleconstants';
import ProgressiveImage from './progressiveimage';

export default class VerticalCarditem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true,
    });
  }
  onBlur() {
    this.setState({
      focused: false,
    });
  }
  onPress() {
    alert('Clicked');
    // this.props.onPress(this.props.data.type)
  }

  render() {
    const {data} = this.props;
    return (
        <TouchableHighlight 
          underlayColor={false} 
          activeOpacity={0.9} 
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={this.onPress}
          style={[styles.container,
            this.state.focused
              ? [globalstyles.focusBorder]
              : globalstyles.blurBorder
          ]}>
            <ProgressiveImage
              style={globalstyles.verticalImage}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(data.image, 352, 450)}}
            />
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  }
});
