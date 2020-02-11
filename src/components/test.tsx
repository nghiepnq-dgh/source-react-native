import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { User } from '../types';

export interface AppProps {
    user: User;
}

export interface AppState {
    persons: []
}

export class Test extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
        persons: []
    };
  }
  static defaultProps = {user:{}}

  public render() {
    const {user} = this.props
    const {persons} = this.state
    console.log("DEBUG-CODE: Test -> render -> user", user)
    return (
      <View>
         <Text>App Component</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
    console.log("DEBUG-CODE: mapStateToProps -> state", state)
    return {
        user: state.users.user,
    }
};

const mapDispatchToProps = {

};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);