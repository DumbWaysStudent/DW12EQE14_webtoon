import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Row, Card, Content } from 'native-base';
import { BannerWidth } from './DetailEpisodeScreen';
class DetailEpisode extends Component {
    constructor() {
        super();
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
        };
    }
    render() {
        const { navigation } = this.props;
        return (<Container>
            <Content>
                {this.state.banners.map((item) => (
                    <Row>
                        <Card style={{ flex: 0 }}>
                            <Image style={{ resizeMode: 'cover', width: BannerWidth, height: 200 }} source={{ uri: item.image }} />
                        </Card>
                    </Row>
                ))}
            </Content>
        </Container>);
    }
}
export default DetailEpisode;