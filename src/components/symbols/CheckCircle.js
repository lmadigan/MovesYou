import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckCircle = ({ onPress }) => {
  return (
     <TouchableOpacity onPress={onPress}>
      <Icon name="check-circle" size={25} color='#adb5bd' />
    </TouchableOpacity>
  );
};
export { CheckCircle };
