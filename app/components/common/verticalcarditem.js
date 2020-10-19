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
  }

  render() {
    const {data} = this.props;
    const sizing = {height: 360, width: 258.5};
    return (
        <TouchableHighlight 
          underlayColor={false} 
          activeOpacity={0.9} 
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          style={
            this.state.focused
              ? [globalstyles.focusBorder,sizing]
              : globalstyles.blurBorder
          }>
            <ProgressiveImage
              style={globalstyles.verticalImage}
              overlay={false}
              thumbnailSource={require('../../assets/images/thumbnail1px.jpg')}
              source={{uri: setImageUrl(data.image, 720, 900)}}
            />
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  borderFocus: {
    borderWidth: 8,
    borderColor: colors.white,
  },
  container: {
    marginLeft: 10,
  }
});
