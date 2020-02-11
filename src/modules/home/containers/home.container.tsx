import { connect } from 'react-redux';
import React, { Component } from 'react';
import HomeComponent from '../components/home.compoent';
import { fetchUser } from '../home.actions';

// export interface Props {
//   fetchUser: typeof fetchUser;
//   user: any
// }

// export class Home extends Component<Props> {

//   componentDidMount() {
//     this.props.fetchUser('1');
//   }
//   render() {
//     return (
//       <View>
//         <HomeComponent />
//       </View>
//     );
//   }
// }

const mapStateToProps = (state: any) => ({
    user: state.users.user,
  });
  
const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
