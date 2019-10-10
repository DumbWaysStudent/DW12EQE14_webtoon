import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Item,
  Input,
  Row,
  Content
} from 'native-base';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 170;

const styles = StyleSheet.create({
  coursel: {
    backgroundColor: '#66ccff',
    zIndex: 10

  },
  sroll_left: {
    marginLeft: 5,
    marginRight: 5,
  },

  container: {
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 150,
  },

  title_scroll: {
    fontSize: 30,
    color: '#c61aff',
    paddingLeft: 20,

  },
  sroll_image: {
    width: 20,
    height: 20,
    paddingLeft: 2
  },

  ScrollViewCon: {
    marginRight: 10,
    alignSelf: 'center',
    width: 150,
  },
  ScrollViewImg: {
    width: 150,
    borderWidth: 1,
    borderColor: 'white',
    height: 150,
  },

  all_icon: {
    marginLeft: 20,
    marginBottom: 0,
    marginTop: 5,

  },

  title_all: {
    fontSize: 30,
    color: '#c61aff',
    paddingLeft: 20,
  },

  all_cont: {
    paddingTop: 20,
    marginBottom: 15,

  },
  all_img: {
    width: 80,
    height: 80,
    paddingTop: 20,
  },
  all_des: {
    flex: 1,
    marginLeft: 15,
    paddingTop: 15,
  },
  AllButton: {
    width: 110,
  },
  AllFav: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold'
  },



});

export default class For_you extends React.Component {
  constructor() {
    super()
    this.state = {
      banners: [{
        title: 'The Secret of Angel',
        image: 'https://i.pinimg.com/originals/43/52/cd/4352cd7b6ee6fe01f3811607af837751.jpg'
      }, {
        title: 'Pasutri Gaje',
        image: 'https://i.pinimg.com/originals/7e/0d/97/7e0d97b4cf0b6310c8a254d47afb24df.jpg'
      }, {
        title: 'Young Mom',
        image: 'https://i.pinimg.com/originals/bc/68/fa/bc68fa7dcc4bfbd0b5d8f58a1f4b554c.jpg'
      }]
    }
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
      </View>
    );
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>


          <View style={styles.container}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth} >
              {this.state.banners.map((image, index) => this.renderPage(image.image, index))}
            </Carousel>
            <View style={styles.sroll_left}>
              <Text style={styles.title_scroll}>Favourite</Text>
              <ScrollView horizontal={true}>
                {this.state.banners.map((image) => (
                  <View style={styles.ScrollViewCon} key={image.image}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Detail_webton', { item: image.image, title: image.title })}>
                      <Image style={styles.ScrollViewImg} source={{ uri: image.image }} />
                    </TouchableOpacity>
                    <Text>{image.title}</Text>
                  </View>))}
              </ScrollView>
            </View>
            <View style={styles.all_icon}>
              <Text style={styles.title_all}>All</Text>
              {this.state.banners.map((image) => (
                <View style={styles.all_cont} key={image.image}>
                  <Row>
                    <Image style={styles.all_img} source={{ uri: image.image }} />
                    <View style={styles.all_des}>
                      <Text style={styles.AllTitle}>{image.title}</Text>
                      <Button warning small style={styles.AllButton}>
                        <Text style={styles.AllFav}>+ Favourite</Text>
                      </Button>
                    </View>
                  </Row>
                </View>
              ))}
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active onPress={() => this.props.navigation.navigate('For_you')} >
              <Icon name="apps" />
              <Text>For You</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Favorite')} >
              <Icon name="star-half" />
              <Text>Favorite</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );

  }
}