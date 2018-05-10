import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card, CardSection, Header } from './common';
import { PlusButtonSkinny } from './symbols';
import AddItemsModal from './AddItemsModal';

class PassionView extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.onPlus = this.onPlus.bind(this);
  }

  onPlus() {
    console.log("Plus!");
    this.setState({ showModal: true });
  }

  render() {
    console.log(this.props);
    const { textStyle, cardsectionStyle, buttonContainerStyle } = styles;

    return (
      <Card>
        <CardSection style={cardsectionStyle}>
          <Text style={textStyle}>{this.props.passion.passion}</Text>
        </CardSection>
        <View style={buttonContainerStyle}>
          <TouchableOpacity onPress={this.onPlus.bind(this)}>
            <PlusButtonSkinny />
          </TouchableOpacity>
        </View>
        <AddItemsModal
          visible={this.state.showModal}>
          </AddItemsModal>
      </Card>
    );
  }
 }

 const mapStateToProps = (state) => {
   const { passions } = state;
   return { passions };
 };

 const width = Dimensions.get("window").width;
 const height = Dimensions.get("window").height;

 const styles = {
   cardStyle:{
     height: height,
     backgroundColor: '#FEFEFE'
   },
   cardsectionStyle: {
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
   },
   textStyle: {
     padding: 10,
     color: '#4c5267',
     fontSize: 22
   },
   buttonContainerStyle:{
     alignItems: 'center',
     alignSelf: 'center'
   }
 };


export default connect(mapStateToProps, {})(PassionView);
