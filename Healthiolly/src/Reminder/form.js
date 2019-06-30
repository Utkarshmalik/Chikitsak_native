import React, { Component } from "react";
import { View, Text, ImageBackground, Image, AsyncStorage } from "react-native";
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Thumbnail,
    Icon
} from "native-base";
let { StyleSheet } = React;
import Header from "../reusables/header";
import { Overlay, overlayBackgroundColor } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import ImgToBase64 from "react-native-image-base64";

/*

{
 	"date":"09/09/2017",
 	"doctorName":"Aman singh",
 	"doctorId":"qwert124",
 	"diseaseType":"cancer",
 	"hospitalName":"Oyo hospitals",
 	"medicine":"[{ name:iodex,freq:3,dur:30} ]",
 	"comments":"third stage cancer",
*/

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicineName: "",
            duration: "",
            frequency: "",
            currentUser: null
        };
    }

    onChangeMedicineName(value) {
        this.setState({
            medicineName: value
        });
    }

    onChangeFrequency(value) {
        this.setState({
            frequency: value
        });
    }

    onChangeDuration(value) {
        this.setState({
            duration: value
        });
    }

    componentWillMount() {
        AsyncStorage.getItem("user")
            .then(res => this.setState({ currentUser: res }))
            .catch(err => console.log(err));
    }

    onAddMedicine() {
        /*
       	"medicine":[{ "name":"prcoefine","freq":"2","dur":"11"},{ "name":"botrine","freq":"5","dur":"21"}],


      */

        const obj = {
            name: this.state.medicineName,
            freq: this.state.frequency,
            dur: this.state.duration
        };

        fetch(
            `https://async-healthify.herokuapp.com/runMed/${
                this.state.currentUser
            }`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }
        )
            .then(res => {
                console.log(res);
                this.props.navigation.navigate("profile");
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Add Medicine" />

                <Container
                    style={{
                        flex: 2,
                        justifyContent: "center",
                        padding: 10
                    }}
                >
                    <Content style={{ marginTop: 50 }}>
                        <Item>
                            <Icon
                                style={{ color: "#24C6DC" }}
                                active
                                name="flask"
                            />
                            <Input
                                onChangeText={this.onChangeMedicineName.bind(
                                    this
                                )}
                                placeholder="Medicine Name"
                            />
                        </Item>
                        <Item>
                            <Icon
                                style={{ color: "#24C6DC" }}
                                active
                                name="star-half"
                            />

                            <Input
                                onChangeText={this.onChangeFrequency.bind(this)}
                                placeholder="frequency(times)"
                            />
                        </Item>
                        <Item>
                            <Icon
                                style={{ color: "#24C6DC" }}
                                active
                                name="pint"
                            />

                            <Input
                                onChangeText={this.onChangeDuration.bind(this)}
                                placeholder="Duration(days)"
                            />
                        </Item>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <Button
                                onPress={this.onAddMedicine.bind(this)}
                                style={{
                                    backgroundColor: "#24C6DC",
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    marginTop: 30
                                }}
                            >
                                <Text style={{ color: "white" }}> Add</Text>
                            </Button>
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}
