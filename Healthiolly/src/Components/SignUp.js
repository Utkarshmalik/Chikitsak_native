import React, { Component } from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../reusables/header";

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
let { StyleSheet } = React;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            dob: "",
            address: "",
            phone: "",
            emergencyPhone: "",
            bloodGroup: "",
            height: "",
            weight: ""
        };
    }

    onChangeName(value) {
        this.setState({
            name: value
        });
    }

    onChangeAge(value) {
        this.setState({
            age: value
        });
    }
    onChangeDOB(value) {
        this.setState({
            dob: value
        });
    }
    onChangeEmail(value) {
        this.setState({
            email: value
        });
    }
    onChangePhone(value) {
        this.setState({
            phone: value
        });
    }
    onChangeEmergencyPhone(value) {
        this.setState({
            emergencyPhone: value
        });
    }
    onChangeAddress(value) {
        this.setState({
            address: value
        });
    }
    onChangeHeight(value) {
        this.setState({
            height: value
        });
    }
    onChangeWeight(value) {
        this.setState({
            weight: value
        });
    }
    onChangeBloodGroup(value) {
        this.setState({
            bloodGroup: value
        });
    }

    onSignUp() {
        let obj = {
            name: this.state.name,
            age: this.state.age,
            dob: this.state.dob,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            emergencyPhone: this.state.emergencyPhone,
            height: this.state.height,
            weight: this.state.weight,
            bloodGroup: this.state.bloodGroup
        };

        fetch(`https://async-healthify.herokuapp.com/patient/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => {
                console.log(res);
                this.props.navigation.navigate("login");
            })
            .catch(err => console.log(err));

        console.log(obj);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container
                    style={{
                        flex: 1,
                        justifyContent: "center"
                        // marginTop: 100
                    }}
                >
                    <Form
                        style={{
                            //flex: 1,
                            //justifyContent: "center",
                            alignItems: "center",
                            marginTop: -90
                        }}
                    >
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                onChangeText={this.onChangeName.bind(this)}
                                value={this.state.name}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>D.O.B</Label>
                            <Input
                                onChangeText={this.onChangeDOB.bind(this)}
                                value={this.state.dob}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>age</Label>
                            <Input
                                onChangeText={this.onChangeAge.bind(this)}
                                value={this.state.age}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>height</Label>
                            <Input
                                onChangeText={this.onChangeHeight.bind(this)}
                                value={this.state.height}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>weight</Label>
                            <Input
                                onChangeText={this.onChangeWeight.bind(this)}
                                value={this.state.weight}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>blood group</Label>
                            <Input
                                onChangeText={this.onChangeBloodGroup.bind(
                                    this
                                )}
                                value={this.state.bloodGroup}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>email</Label>
                            <Input
                                onChangeText={this.onChangeEmail.bind(this)}
                                value={this.state.email}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>phone</Label>
                            <Input
                                onChangeText={this.onChangePhone.bind(this)}
                                value={this.state.phone}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>address</Label>
                            <Input
                                onChangeText={this.onChangeAddress.bind(this)}
                                value={this.state.address}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>emergency Phone</Label>
                            <Input
                                onChangeText={this.onChangeEmergencyPhone.bind(
                                    this
                                )}
                                value={this.state.emergencyPhone}
                            />
                        </Item>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Button
                                transparent
                                onPress={this.onSignUp.bind(this)}
                                style={{
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    marginTop: 30,
                                    backgroundColor: "#24C6DC"

                                    //marginLeft: 10,
                                    //backgroundColor: "#6C162B"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 19
                                        //paddingLeft: 30,
                                        //paddingRight: 30,
                                        //paddingTop: 15,
                                        //paddingBottom:15
                                    }}
                                >
                                    Sign Up
                                </Text>
                            </Button>
                        </View>
                    </Form>
                </Container>
            </View>
        );
    }
}
