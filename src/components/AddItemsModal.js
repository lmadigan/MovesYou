import React, { Component } from 'react';
import { Modal, View, Text, Dimensions } from 'react-native';
import { CardSection } from './common';
import { Button } from './common';


class AddItem extends Component {

  render(){
    console.log(this.props);
    const { viewStyle, containerStyle, sectionStyle } = styles;
    return(
      <Modal
        visible={this.props.visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {}}
        >
        <View style={containerStyle}>
        <View style={viewStyle}>
          <CardSection style={sectionStyle}>
            <Text>Label</Text>
          </CardSection>
          <CardSection>
            <Text>Description</Text>
          </CardSection>
          <CardSection>
            <Text>Location</Text>
          </CardSection>
          <CardSection>
            <Text>Photos</Text>
          </CardSection>
          <CardSection>
            <Text>Link</Text>
          </CardSection>
        </View>
        </View>
        </Modal>
    );
  }
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = {
  viewStyle: {
    height: 400,
    padding: 15,
    borderRadius: 5,
    shadowColor: '#575757',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1.0
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    height: height
  },
  sectionStyle: {
    
  }
};


export default AddItem;
