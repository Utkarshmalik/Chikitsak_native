import React, { Component } from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    AsyncStorage
} from "react-native";
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Thumbnail
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

import Header from "../reusables/header";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onChangeEmail(value) {
        this.setState({
            email: value
        });
    }

    onChangePassword(value) {
        this.setState({
            password: value
        });
    }

    componentDidMount() {
        AsyncStorage.getItem("user")
            .then(res => {
                console.log(res);
                if (res) {
                    this.props.navigation.navigate("dashBoard");
                }
            })
            .catch(err => console.log(err));
    }

    onLogin() {
        fetch(
            `https://async-healthify.herokuapp.com/patient/${this.state.email}`
        )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.name) {
                    console.log(this.state.email);
                    AsyncStorage.setItem("user", this.state.email);
                    this.props.navigation.navigate("dashBoard");
                }
            })
            .catch(function() {
                console.log("error");
            });
    }

    onSignUp() {
        this.props.navigation.navigate("signUp");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="" />

                <Container
                    style={{
                        flex: 2,
                        justifyContent: "center",
                        marginTop: 50
                    }}
                >
                    <Form
                        style={{
                            //flex: 1,
                            //justifyContent: "center",
                            alignItems: "center",
                            marginTop: -200
                        }}
                    >
                        <Thumbnail
                            large
                            square
                            style={{
                                height: 260,
                                width: 260
                            }}
                            source={{
                                url:
                                    "file:///Users/utkarshmalik/Desktop/image3.png"
                            }}
                        />

                        <Item floatingLabel>
                            <Label style={{ color: "#514A9D" }}>Email</Label>
                            <Input
                                onChangeText={this.onChangeEmail.bind(this)}
                                value={this.state.email}
                                style={{ color: "#514A9D" }}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{ color: "#514A9D" }}>Password</Label>
                            <Input
                                onChangeText={this.onChangePassword.bind(this)}
                                value={this.state.password}
                                style={{ color: "#514A9D" }}
                                secureTextEntry
                            />
                        </Item>

                        <LinearGradient
                            colors={["#00d2ff", "#928dab"]}
                            style={styles.linearGradient}
                        >
                            <Button
                                onPress={this.onLogin.bind(this)}
                                style={{
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    //marginTop: 30,
                                    backgroundColor: "transparent"
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 18 }}>
                                    Login
                                </Text>
                            </Button>
                        </LinearGradient>

                        <LinearGradient
                            colors={["#00d2ff", "#928dab"]}
                            style={styles.linearGradient}
                        >
                            <Button
                                onPress={this.onSignUp.bind(this)}
                                style={{
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    backgroundColor: "transparent"
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 18 }}>
                                    Sign Up >
                                </Text>
                            </Button>
                        </LinearGradient>
                    </Form>
                </Container>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Gill Sans",
        textAlign: "center",
        margin: 10,
        color: "#ffffff",
        backgroundColor: "transparent"
    }
});
