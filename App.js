import React from 'react';
import { Text, View, Button, LogoTitle, Share, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ForYou from "./component/ForYou";
import Login from "./component/Login"
import DetailWebton from './component/Detail_webton'
import DetailEpisode from './component/DetailEpisodeScreen';
import Favorite from './component/Favorite';
import Profil from './component/Profile';
import Edit from './component/EditProfil';
import myWebton from './component/CreateScreen';
import AddEpisode from './component/AddEpisode';
import CreateEpisode from './component/CreateEpisode';
import EditWebtoon from './component/EditWebtoon';
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

const forYou = createStackNavigator(
  {
    Foryou: {
      screen: ForYou,
      title: 'Foryou',
      navigationOptions: { header: null },
    },

    Favorite: {
      screen: Favorite,
      title: 'Favorite',
      navigationOptions: { header: null },
    },

    Profil: {
      screen: Profil,
      title: 'Profil',
      navigationOptions: { header: null },
    },

    Edit: {
      screen: Edit,
      title: 'EditProfil',
      navigationOptions: { header: null },
    },

    MyWebton: {
      screen: myWebton,
      title: 'Detail_webton',
      navigationOptions: ({ navigation }) => {
        const { navigate, getParam } = navigation
        const title = 'My Webtoon'
        return {
          headerTitle: title,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'blue',
          }
        }
      }
    },

    AddEpisode: {
      screen: AddEpisode,
      title: 'Add Episode',

      navigationOptions: ({ navigation }) => {
        const title = 'My Webtoon'
        return {
          headerTintColor: '#fff',
          headerTitle: title,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerRight: <Icon type="FontAwesome" name="check" style={{ marginRight: 30, fontSize: 20, color: 'white' }} />,
        }
      }
    },

    CreateEpisode: {
      screen: CreateEpisode,
      title: 'Episode Episode',
      navigationOptions: ({ navigation }) => {
        const title = 'Create Episode'
        return {

          headerTintColor: '#fff',
          headerTitle: title,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerRight: <Icon type="FontAwesome" name="check" style={{ marginRight: 30, fontSize: 20, color: 'white' }} />,
        }
      }
      // console.log('nama');
    },

    EditWebtoon: {
      screen: EditWebtoon,
      title: 'Edit Webtoon',
      navigationOptions: ({ navigation }) => {
        const title = 'Edit Webtoon'
        return {
          headerTintColor: '#fff',
          headerTitle: title,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerRight: <Icon type="FontAwesome" name="check" style={{ marginRight: 30, fontSize: 20, color: 'white' }} />,
        }
      }
      // console.log('nama');
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
  Foryou: forYou,
},
  {
    initialRouteName: "Foryou",
  });

export default createAppContainer(Switch);



