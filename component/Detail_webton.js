import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import { Container, Row, Card, CardItem, Thumbnail, Text, View, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import Share from "./Fab";
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
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Card style={{ flex: 0 }}>
          <Image style={{ resizeMode: 'cover', width: BannerWidth, height: 200 }} source={require('../asset/image/image_1.jpg')} />
        </Card>
        <Content>
          <Card style={{ flex: 0 }}>
            <Row>
              <Image style={styles.image_episode} source={require('../asset/image/image_1.jpg')} />
              <Text style={styles.text_episode} >Episode 2   {"\n"} {"\n"} banaa</Text>
            </Row>
            <Row>
              <Image style={styles.image_episode} source={require('../asset/image/image_1.jpg')} />
              <Text style={styles.text_episode} >Episode 2   {"\n"} {"\n"} banaa</Text>
            </Row>
            <Row>
              <Image style={styles.image_episode} source={require('../asset/image/image_1.jpg')} />
              <Text style={styles.text_episode} >Episode 2   {"\n"} {"\n"} banaa</Text>
            </Row>
            <Row>
              <Image style={styles.image_episode} source={require('../asset/image/image_1.jpg')} />
              <Text style={styles.text_episode} >Episode 2   {"\n"} {"\n"} banaa</Text>
            </Row>
          </Card>
        </Content>
      </Container>
    );
  }
}


export default Detail_webton;