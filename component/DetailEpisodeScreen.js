import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Row, Card, Content, View, CardItem } from 'native-base';


const BannerWidth = Dimensions.get('window').width;
class DetailEpisode extends Component {
    constructor() {
        super();
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
        };
    }
    render() {
        return (
            <Container>
                <Content>

                    {this.state.banners.map((image) => (
                        <View key={image.image}>

                            <Row>
                                <Image style={{ width: BannerWidth, height: 200, marginBottom: 5 }} source={{ uri: image.image }} />
                            </Row>
                        </View>
                    ))}


                </Content>

            </Container >


        );
    }
}
export default DetailEpisode;