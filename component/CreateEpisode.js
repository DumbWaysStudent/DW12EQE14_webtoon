import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Row, Fab, Item, Input, Title, Text, Card, Content, Button, View, CardItem } from 'native-base';


class CreateEpisode extends Component {
    constructor() {
        super()
        this.state = {
            banners: [{
                episode: 3,
                title: 'The Secret of Angel',
                UrlImg: 'https://i.pinimg.com/originals/43/52/cd/4352cd7b6ee6fe01f3811607af837751.jpg',
                NameImg: 'image1.jpg'
            }, {
                episode: 2,
                title: 'Pasutri Gaje',
                UrlImg: 'https://i.pinimg.com/originals/7e/0d/97/7e0d97b4cf0b6310c8a254d47afb24df.jpg',
                NameImg: 'image2.jpg'
            }, {
                episode: 1,
                title: 'Young Mom',
                UrlImg: 'https://i.pinimg.com/originals/bc/68/fa/bc68fa7dcc4bfbd0b5d8f58a1f4b554c.jpg',
                NameImg: 'image2.jpg'
            }]
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }}>
                        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 20, marginBottom: 5 }}>Nama</Text>
                        <Item rounded>
                            <Input />
                        </Item>
                        {this.state.banners.map((item) => (
                            <View key={item.image} style={{ marginTop: 20, marginLeft: 10 }}>
                                <Row>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode')}>
                                        <Image style={{ width: 80, height: 80, marginBottom: 5, marginLeft: 2 }} source={{ uri: item.UrlImg }} />
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: 10, marginBottom: 5, fontSize: 20 }}>{item.NameImg}</Text>
                                    <Button danger style={{ marginTop: 40, marginLeft: -80 }}><Text>Delete</Text></Button>

                                </Row>
                            </View>
                        ))}
                    </View>
                    <Button rounded style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                        <Icon type="FontAwesome" name="plus" style={{ marginLeft: 120, fontSize: 20, color: 'white' }} />
                        <Text>Image</Text>
                    </Button>
                </Content>
            </Container >
        );
    }
}
export default CreateEpisode;