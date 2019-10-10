import React from 'react';
import { Text, View, Button, LogoTitle, Share, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import For_you from "./component/Screen";
import Login from "./component/Login"
import DetailWebton from './component/Detail_webton'
import DetailEpisode from './component/DetailEpisodeScreen';
import Favorite from './component/Favorite';
import Icon from 'react-native-vector-icons/FontAwesome';

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

    Favorite: {
      screen: Favorite,
      title: 'Favorite',
      navigationOptions: { header: null },
    },

    Detail_webton: {
      screen: DetailWebton,
      title: 'Detail_webton',
      navigationOptions: ({ navigation }) => {
        const { navigate, getParam } = navigation
        const title = getParam('title')
        const handleShare = async () => {
          try {
            const result = await Share.share({
              message:
                'React Native | A framework for building native apps using React',
            });

            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
        }
        return {
          headerTitle: title,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerRight: <Icon type="FontAwesome" name="share-alt" style={{ marginRight: 30, fontSize: 20 }} onPress={handleShare} />,
        }
      }
    },

    DetailEpisode: {
      screen: DetailEpisode,
      title: 'Detail Episode',
      navigationOptions: ({ navigation }) => {
        const { navigate, getParam } = navigation
        const title = getParam('title')
        const handleShare = async () => {
          try {
            const result = await Share.share({
              message:
                'React Native | A framework for building native apps using React',
            });

            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
        }
        return {
          headerTitle: title,
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerRight: <Icon type="FontAwesome" name="share-alt" style={{ marginRight: 30, fontSize: 20 }} onPress={handleShare} />,
        }
      }
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



