import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Row, Fab, Item, Input, Title, Text, Card, Content, Button, View, CardItem } from 'native-base';


class EditWebtoon extends Component {
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
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 5 }}>
                        <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 20, marginBottom: 5 }}>Title</Text>
                        <Item rounded>
                            <Input />
                        </Item>
                        {this.state.banners.map((image) => (
                            <View key={image.image} style={{ marginTop: 20, marginLeft: 10 }}>
                                <Row>
                                    <Image style={{ width: 80, height: 80, marginBottom: 5, marginLeft: 2 }} source={{ uri: image.image }} />
                                    <Text style={{ marginLeft: 5, fontSize: 20 }}>{image.title} {'\n'} {'\n'} 12 Desember 2010 </Text>
                                </Row>
                            </View>
                        ))}
                    </View>
                    <Button rounded style={{ marginTop: 30, marginLeft: 5, marginRight: 5 }}>
                        <Icon type="FontAwesome" name="plus" style={{ marginLeft: 120, fontSize: 20, color: 'white' }} />
                        <Text>Add Episode</Text>
                    </Button>
                    <Button danger rounded style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                        <Icon type="FontAwesome" name="plus" style={{ marginLeft: 120, fontSize: 20, color: 'white' }} />
                        <Text>Delete Episode</Text>
                    </Button>
                </Content>

            </Container >

        );
    }
}
export default EditWebtoon;