import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { fetchPassions, setPassion } from '../actions';
import PassionItem from './PassionItem';

class PassionsList extends Component {
  constructor(props) {
    super(props);
    this.state = { passion: {}};
    this.onPress = this.onPress.bind(this);
    // this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    this.props.fetchPassions();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that the component will
    // be rendered with
    // this.props is still the old set of nextProps
    this.createDataSource(nextProps);
  }

  createDataSource({ passions }) {
    const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });

    this.dataSource = ds.cloneWithRows(passions);
  }

  onPress(passion) {
    this.props.setPassion(passion)
  }


  render() {
    const onPress = this.onPress;

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(rowData) =>
            <PassionItem passion={rowData} onItemPress={onPress}/>
        }
        >

      </ListView>
    );
  }
}


const mapStateToProps = (state) => {
  const { passionItems } = state.passions;
  const passions = _.map(passionItems, (val, uid) => {
    return { ...val, uid };
  });
  return { passions };
};

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
}

export default connect(mapStateToProps, { fetchPassions, setPassion })(PassionsList);
