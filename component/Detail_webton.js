import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import { Container, Row, Card, CardItem, Thumbnail, Text, View, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

const BannerWidth = Dimensions.get('window').width;
const BannerHigh = Dimensions.get('window').height;
const styles = StyleSheet.create({
  fab_style: {
    marginBottom: 90
  },

  image_episode: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginBottom: 10,
    marginLeft: 5

  },
  text_episode: {
    fontSize: 20,
    marginLeft: 5,
  }
});
class Detail_webton extends Component {
  constructor() {
    super()
    this.state = {
      banners: [{
        episode: 3,
        title: 'The Secret of Angel',
        image: 'https://i.pinimg.com/originals/43/52/cd/4352cd7b6ee6fe01f3811607af837751.jpg'
      }, {
        episode: 2,
        title: 'Pasutri Gaje',
        image: 'https://i.pinimg.com/originals/7e/0d/97/7e0d97b4cf0b6310c8a254d47afb24df.jpg'
      }, {
        episode: 1,
        title: 'Young Mom',
        image: 'https://i.pinimg.com/originals/bc/68/fa/bc68fa7dcc4bfbd0b5d8f58a1f4b554c.jpg'
      }]
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Card style={{ flex: 0 }}>
          <Image style={{ resizeMode: 'cover', width: BannerWidth, height: 200 }} source={{ uri: navigation.getParam('item') }} />
        </Card>
        <Content>
          <Card style={{ flex: 0 }}>
            {this.state.banners.map((item) => (
              <Row>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DetailEpisode', { title: item.title })}>
                  <Image style={styles.image_episode} source={{ uri: item.image }} />
                </TouchableOpacity>

                <Text style={styles.text_episode} >Episode {item.episode}   {"\n"} {"\n"} {item.title}</Text>
              </Row>
            ))}
          </Card>
        </Content>
      </Container >
    );
  }
}


export default Detail_webton;