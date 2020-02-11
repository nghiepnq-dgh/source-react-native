import * as React from 'react';
import { View, Text } from 'react-native';
import { fetchUser } from '../home.actions';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="ios-home" size={25} color="#ccc" />;

export interface HomeProps {
    fetchUser: typeof fetchUser;
    user: any
}

export interface HomeState {
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: myIcon,
  };
  static defaultProps = {user:{}, fetchUser}

  componentDidMount() {
   this.props.fetchUser('1');
  }

  public render() {
    const {user} = this.props
    console.log("DEBUG-CODE: HomeComponent -> render -> user", user)
    return (
      <View>
         <Text>App Component</Text>
      </View>
    );
  }
}
