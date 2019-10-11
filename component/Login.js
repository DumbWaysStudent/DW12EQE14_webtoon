import React, { Component } from 'react';
import {
    StyleSheet,
    Alert
} from 'react-native';
import {
    Text,
    View,
    CardItem,
    Content,
    Card,
    Body,
    Item,
    Input,
    Label,
    Form,
    Button,
    Icon,
} from 'native-base';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailvalid: '',
            passvalid: '',
            iconEye: 'eye',
            buttonDisabled: true,
            secure: false
        }
    }

    userValueEmail = (email) => {
        // this.state.email = email
        let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var tes = reg.test(email);
        if (tes === true) {
            console.log(true)
            this.setState({

                buttonDisabled: false
            })
        } else {
            this.setState({

                buttonDisabled: true
            })
        }

    }
    userValuePassword = (password) => {
        if (password === null) {
            this.setState({
                buttonDisabled: false

            })
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }
    registration = () => {
        let Email = this.state.email;
        var addarray = Email.split("");

        console.log(addarray.includes('@'));
        // var password = validation ('password',this.state.password);
        if (addarray.includes('@') == true) {
            Alert.alert(
                'Alert Title',
                'sukses',
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        } else {
            console.log("data tidak ada");
            this.setState({
                email_error: 'email salah',
                email: ''
            })
        }
    }
    // konfiguras password
    eyeOff = () => {
        this.setState({
            iconEye: 'eye-off',
            secure: true,
        })
    }

    eyeOn = () => {
        this.setState({
            iconEye: 'eye',
            secure: false,
        })
    }
    render() {
        return (
            <View style={styles.Container} >
                {/* tampilan Judul Webton */}
                <View style={styles.card_title_top}>
                    <View style={styles.card_title}>
                        <Text style={styles.title_big}>
                            LOG IN
                    </Text>
                    </View>
                    <View style={styles.card_title}>
                        <Text style={styles.title_small} >
                            Login With Your account WEBTOON
                    </Text>
                    </View>
                </View>
                {/* Tampilan Form Login Webton */}
                <View style={styles.form_login} >
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Content>
                                        <Form>
                                            <Item stackedLabel >
                                                <Label>Email</Label>
                                                <Input placeholder={this.state.email_error} onChangeText={this.userValueEmail} />
                                            </Item>

                                            <Item stackedLabel last >
                                                <Label>Password</Label>
                                                <Input placeholder='' secureTextEntry={this.state.secure} onChangeText={this.userValuePassword} />

                                            </Item>
                                            <Icon onPress={this.state.iconEye == 'eye' ? this.eyeOff : this.eyeOn} style={styles.icon} active name={this.state.iconEye} />
                                            <Button block disabled={this.state.buttonDisabled} onPress={() => this.props.navigation.navigate('Foryou')}>
                                                <Text>Log In</Text>
                                            </Button>
                                        </Form>
                                    </Content>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#66ccff',
        flex: 1
    },
    // style Title Webton
    card_title_top: {
        marginTop: 200,
    },
    card_title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        height: 500,
        backgroundColor: 'yellow'
    },
    title_big: {
        fontSize: 60,
        color: 'white',
        marginBottom: 100
    },

    title_small: {
        fontSize: 20,
        color: 'white',
        marginBottom: 90
    },

    title_down: {
        height: 100,
        fontSize: 20,
        color: 'white',
        marginTop: -10
    },

    // -------------------------

    form_login: {

        backgroundColor: '#66ccff',
        flex: 9,
        flexDirection: 'row',
        textAlign: 'center',

    },

    icon: {
        position: 'absolute',
        marginLeft: 270,
        marginTop: 90,
    }
});

export default Login