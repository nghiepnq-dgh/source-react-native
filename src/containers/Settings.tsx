import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="ios-settings" size={25} color="#ccc" />;
export default class Settings extends React.PureComponent {
  static navigationOptions = {
    tabBarLabel: 'Setiings',
    tabBarIcon: myIcon,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
