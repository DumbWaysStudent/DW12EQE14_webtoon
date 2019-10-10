import React from 'react';
import { Text, View, Button, LogoTitle } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import For_you from "./component/Screen";
import Login from "./component/Login"
import DetailWebton from './component/Detail_webton'

// const SignedOut = createStackNavigator(
//   {
//     Login: {
//       screen: Login,
//       title: 'Login',
//       navigationOptions: {header: null},
//     }
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );

const SignedIn = createStackNavigator(
  {
    Login: {
      screen: Login,
      title: 'Login',
      navigationOptions: { header: null },
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const Foryou = createStackNavigator(
  {
    For_you: {
      screen: For_you,
      title: 'Foryou',
      navigationOptions: { header: null },
    },

    Detail_webton: {
      screen: DetailWebton,
      title: 'Detail_webton',
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    }
  }


);

const Switch = createSwitchNavigator({
  SignedIn: SignedIn,
  Foryou: Foryou,
},
  {
    initialRouteName: "Foryou",
  });

export default createAppContainer(Switch);



