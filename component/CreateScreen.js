import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Row, Fab, Text, Card, Content, Button, View, CardItem } from 'native-base';


class CreateScreen extends Component {
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
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        {this.state.banners.map((image) => (
                            <View key={image.image}>
                                <Row>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditWebtoon')}>
                                        <Image style={{ width: 80, height: 80, marginBottom: 5, marginLeft: 2 }} source={{ uri: image.image }} />
                                        <Text style={{ marginLeft: 5, fontSize: 20 }}>{image.title} {'\n'} {'\n'} {image.episode} Episode (s) </Text>
                                    </TouchableOpacity>
                                </Row>
                            </View>
                        ))}

                        <Button rounded onPress={() => this.props.navigation.navigate('AddEpisode')} style={{ width: 50, height: 50, marginTop: 170, marginLeft: 260 }}>
                            <Icon type="FontAwesome" name="plus" style={{ fontSize: 25, color: 'white', marginLeft: 15 }} />
                        </Button>


                    </View>
                </Content>

            </Container >


        );
    }
}
export default CreateScreen;