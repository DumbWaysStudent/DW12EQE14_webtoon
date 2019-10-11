import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker'

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
    Left,
    Body,
    Title,
    Button,
    Text,
    Item,
    Input,
    Right,
    Thumbnail,
    CardItem,
    Card,
    Content,
} from 'native-base';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 170;

const styles = StyleSheet.create({
    ProfilImg: {
        marginLeft: 120,
        marginTop: 80,
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 5,
        marginBottom: 30

    },
    ProfileName: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,

    }

});
export default class Edit extends React.Component {
    state = {
        photo: null,
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response.uri })
                console.log(response)
            }
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Edit Profil</Title>
                    </Body>
                    <Right>

                        <Button onPress={() => this.props.navigation.navigate('Profil')}>
                            <Icon type="FontsAwesome" name="check" style={{ fontSize: 30, color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View >
                        <TouchableOpacity onPress={this.handleChoosePhoto}>
                            {
                                this.state.photo == null &&
                                <Thumbnail style={styles.ProfilImg} large source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                            }
                            {
                                this.state.photo != null &&
                                <Thumbnail style={styles.ProfilImg} large source={{ uri: this.state.photo }} />
                            }

                            <Icon type="FontAwesome" name="camera" style={{ fontSize: 20, marginLeft: 190, marginTop: -42, marginBottom: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <Card style={{ marginLeft: 10, marginRight: 10, borderColor: 'none' }}>
                        <CardItem style={styles.ProfileName}>
                            <Input placeholder='Syamsul Hadi' />
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => this.props.navigation.navigate('For_you')} >
                            <Icon type="MaterialIcons" name="home" style={{ color: 'white', fontSize: 20, }} />
                            <Text>For You</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Favorite')} >
                            <Icon type="FontAwesome" name="star" style={{ color: 'white', fontSize: 20, }} />
                            <Text>Favorite</Text>
                        </Button>
                        <Button vertical active>
                            <Icon type="FontAwesome" name="user" style={{ color: 'white', fontSize: 20, }} />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >

        );

    }
}