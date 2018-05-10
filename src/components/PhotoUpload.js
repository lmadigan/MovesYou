import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Images } from './symbols';

const PhotoUpload = ({ onPress, children }) => {
  const { buttonStyle, viewStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={viewStyle}>
        <Images />
        <Text style={textStyle}>Upload Photo</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#DFDCDC',
    paddingTop: 10
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DFDCDC',
    borderStyle: 'dashed'
  }
};

export default PhotoUpload;
