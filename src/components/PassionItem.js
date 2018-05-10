import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

class PassionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passion: this.props.passion,
      onItemPress: this.props.onItemPress
    };
    this.onPress = this.onPress.bind(this);
  }

    onPress() {
      console.log(this.state);
      this.state.onItemPress(this.state.passion);
    }

    render() {
      const { cardsectionStyle, textStyle } = styles;

      return (
          <CardSection style={styles.cardsectionStyle}>
            <TouchableOpacity onPress={this.onPress.bind(this)}>
              <Text style={styles.textStyle}>
                {this.props.passion.passion}
              </Text>
            </TouchableOpacity>
          </CardSection>
      );
    }

}


const styles = {
  cardsectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  textStyle: {
    padding: 10,
    color: '#4c5267',
    fontSize: 22
  }
};

export default PassionItem;

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { CardSection } from './common';
//
// const PassionItem = ({passion, onPress}) => {
//     const { cardsectionStyle, textStyle } = styles;
//     console.log(passion);
//     return (
//         <CardSection style={styles.cardsectionStyle}>
//           <TouchableOpacity onPress={onPress}>
//             <Text style={styles.textStyle}>
//               {passion.passion}
//             </Text>
//           </TouchableOpacity>
//         </CardSection>
//     );
// };
//
//
// const styles = {
//   cardsectionStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 0
//   },
//   textStyle: {
//     padding: 10,
//     color: '#4c5267',
//     fontSize: 22
//   }
// };
//
// export default PassionItem;
