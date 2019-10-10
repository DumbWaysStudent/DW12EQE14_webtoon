import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        borderColor: 'black'
    }

});
export default class Profile extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Profil</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon type="FontsAwesome" name="pencil" style={{ fontSize: 30, color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View >
                        <Thumbnail style={styles.ProfilImg} large source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }} />
                    </View>
                    <Card>
                        <CardItem style={styles.ProfileName}>
                            <Text>Google Plus</Text>
                            <Right>
                                <Icon type="FontAwesome" name="arrow-circle-right" style={{ fontSize: 30 }} />
                            </Right>
                        </CardItem>
                        <CardItem style={styles.ProfileName}>
                            <Text>Log Out</Text>
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